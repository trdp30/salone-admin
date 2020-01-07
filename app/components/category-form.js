import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

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
      if(!model.get('name')) {
        return false;
      }
      if(!model.get('display_name')) {
        return false;
      }
      if(!model.get('image_source')) {
        return false;
      }
      model.save()
      .then(() => {
        return this.set('model', this.createRecord());
      }).catch((e) => {
        console.log(e)
      })
    },

    update(model) {
      if(!model.get('name')) {
        return false;
      }
      if(!model.get('display_name')) {
        return false;
      }
      if(!model.get('image_source')) {
        return false;
      }
      model.save()
      .then(() => {
        return window.history.back()
      }).catch((e) => {
        console.log(e)
      })
    },

    delete(model) {
      model.destroyRecord()
      .then(() => {
        return window.history.back()
      }).catch((e) => {
        console.log(e)
      })
    },

    back() {
      window.history.back()
    }
  }
});
