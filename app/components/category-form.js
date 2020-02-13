import Component from '@ember/component';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Component.extend({
  store: service(),
  toast: service(),
  subCategory: '',

  createRecord() {
    return this.get('store').createRecord('category')
  },

  didInsertElement() {
    if(this.get('model.sub_categories')) {
      this.set('subCategory', this.get('model.sub_categories').map(sc => sc.name).join(','))
    }
  },


  willDestroyElement() {
    if(this.get('type') == "create") {
      this.get('model').destroyRecord()
    } else if(this.get('type') == "update"){
      this.get('model').rollbackAttributes()
    }
  },

  actions: {
    addAll() {
      RSVP.all(categories.map((category) => {
        return this.get('store').createRecord('category', {
          name: category.name,
          display_name: category.display_name,
          organization: this.get('organizations.firstObject'),
          image_source: "",
          description: ""
        }).save()
        .then((res) => {
          console.log('created', category.name)
        })
        .catch((e) => console.log('failed', category.name, e))
      }))
    },

    save(model) {
      if(!model.get('organization.id')) {
        return this.get('toast').error('Organization cannot be blank');
      }
      if(!model.get('name')) {
        return this.get('toast').error('Name cannot be blank');
      }
      if(!model.get('display_name')) {
        return this.get('toast').error('Display Name cannot be blank');
      }
      if(!model.get('image_source')) {
        return this.get('toast').error('Image Source cannot be blank');
      }
      if(model.get('hasSubCategory') && this.get('subCategory').trim()) {
        let subCategorys = this.get('subCategory').split(',')
        model.set('sub_categories', subCategorys.map((subCategory) => ({ type: subCategory.trim(), name: subCategory.trim() })))
      } else if(model.get('hasSubCategory') && !this.get('subCategory').trim()){
        return this.get('toast').error('Sub Category Cannot be empty');
      }
      model.save()
      .then(() => {
        this.get('toast').success(`Category "${model.get('display_name')}" created`);
        return this.set('model', this.createRecord());
      }).catch((e) => {
        if(e.errors && e.errors.length) {
          e.errors.forEach(error => {
            this.get('toast').error(error.title, error.details)
          });
        } else {
          return this.get('toast').error(e);
        }
      })
    },

    update(model) {
      if(!model.get('organization.id')) {
        return this.get('toast').error('Organization cannot be blank');
      }
      if(!model.get('name')) {
        return this.get('toast').error('Name cannot be blank');
      }
      if(!model.get('display_name')) {
        return this.get('toast').error('Display Name cannot be blank');
      }
      if(!model.get('image_source')) {
        return this.get('toast').error('Image Source cannot be blank');
      }
      if(model.get('hasSubCategory') && this.get('subCategory').trim()) {
        let subCategorys = this.get('subCategory').split(',')
        model.set('sub_categories', subCategorys.map((subCategory) => ({ type: subCategory.trim(), name: subCategory.trim() })))
      } else if(model.get('hasSubCategory') && !this.get('subCategory').trim()){
        return this.get('toast').error('Sub Category Cannot be empty');
      }
      model.save()
      .then(() => {
        this.get('toast').success(`Category "${model.get('display_name')}" updated`);
        return window.history.back()
      }).catch((e) => {
        if(e.errors && e.errors.length) {
          e.errors.forEach(error => {
            this.get('toast').error(error.title, error.details)
          });
        } else {
          return this.get('toast').error(e);
        }
      })
    },

    delete(model) {
      model.destroyRecord()
      .then(() => {
        this.get('toast').success(`Category "${model.get('display_name')}" deleted`);
        return window.history.back()
      }).catch((e) => {
        if(e.errors && e.errors.length) {
          e.errors.forEach(error => {
            this.get('toast').error(error.title, error.details)
          });
        } else {
          return this.get('toast').error(e);
        }
      })
    },

    back() {
      window.history.back()
    },

    upload(categories) {
      return RSVP.all(categories.map((category) => {
        return this.get('store').createRecord('category', {
          name: category.name,
          display_name: category.display_name,
          image_source: category.image_source
        }).save()
      }))
    }
  }
});
