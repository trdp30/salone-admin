import Component from '@ember/component';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Component.extend({
  store: service(),
  toast: service(),

  createRecord() {
    return this.get('store').createRecord('category')
  },

  willDestroyElement() {
    if(this.get('type') == "create") {
      this.get('model').destroyRecord()
    } else if(this.get('type') == "update"){
      this.get('model').rollbackAttributes()
    }
  },

  actions: {
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
      model.save()
      .then(() => {
        this.get('toast').success(`Category "${model.display_name}" created`);
        return this.set('model', this.createRecord());
      }).catch((e) => {
        // console.log(e)
        return this.get('toast').error(e);
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
      model.save()
      .then(() => {
        this.get('toast').success(`Category "${model.display_name}" updated`);
        return window.history.back()
      }).catch((e) => {
        // console.log(e)
        return this.get('toast').error(e);
      })
    },

    delete(model) {
      model.destroyRecord()
      .then(() => {
        this.get('toast').success(`Category "${model.display_name}" deleted`);
        return window.history.back()
      }).catch((e) => {
        // console.log(e)
        return this.get('toast').error(e);
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
        // .catch(e => console.log(e))
      }))
    }
  }
});
