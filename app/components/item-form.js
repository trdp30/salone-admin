import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

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
        console.log(e)
        return this.get('toast').error(e)
      })
    },

    update(model) {
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
        console.log(e)
        return this.get('toast').error(e)
      })
    },

    delete(model) {
      model.destroyRecord()
      .then(() => {
        this.get('toast').success(`Item "${model.name}" deleted`)
        return window.history.back()
      }).catch((e) => {
        console.log(e)
        return this.get('toast').error(e)
      })
    },

    back() {
      window.history.back()
    }
  }
});
