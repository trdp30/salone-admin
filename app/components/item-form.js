import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import RSVP from 'rsvp';

export default Component.extend({
  store: service(),
  toast: service(),

  createRecord() {
    return this.get('store').createRecord('item')
  },

  categories: computed(function() {
    return this.get('store').findAll('category')
  }),

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
      if(!model.get('category.id')) {
        return this.get('toast').error('Category cannot be blank');
      }
      if(!model.get('price')) {
        return this.get('toast').error('Price cannot be blank');
      }
      if(!model.get('image_source')) {
        return this.get('toast').error('Image Source cannot be blank');
      }
      model.save()
      .then(() => {
        this.get('toast').success(`Item "${model.name}" created`)
        return this.set('model', this.createRecord());
      }).catch((e) => {
        // console.log(e)
        return this.get('toast').error(e)
      })
    },

    update(model) {
      if(!model.get('organization.id')) {
        return this.get('toast').error('Organization cannot be blank');
      }
      if(!model.get('name')) {
        return this.get('toast').error('Name cannot be blank');
      }
      if(!model.get('category.id')) {
        return this.get('toast').error('Category cannot be blank');
      }
      if(!model.get('price')) {
        return this.get('toast').error('Price cannot be blank');
      }
      if(!model.get('image_source')) {
        return this.get('toast').error('Image Source cannot be blank');
      }
      model.save()
      .then(() => {
        this.get('toast').success(`Item "${model.name}" updated`)
        return window.history.back()
      }).catch((e) => {
        // console.log(e)
        return this.get('toast').error(e)
      })
    },

    delete(model) {
      model.destroyRecord()
      .then(() => {
        this.get('toast').success(`Item "${model.name}" deleted`)
        return window.history.back()
      }).catch((e) => {
        // console.log(e)
        return this.get('toast').error(e)
      })
    },

    back() {
      window.history.back()
    },

    upload(items) {
      return RSVP.all(items.map((item) => {
        return this.get('store').createRecord('item', {
          name: item.name,
          display_name: item.display_name,
          image_source: item.image_source
        }).save()
        // .catch(e => console.log(e))
      })).then((res) => console.log(res))
    }
  }
});
