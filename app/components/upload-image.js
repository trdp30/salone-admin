import Component from '@ember/component';
import {inject as service } from '@ember/service';
import Ember from 'ember';

export default Component.extend({
  firebase: service(),

  init() {
    this._super(...arguments);
    this.initProperty()
  },

  initProperty() {
    this.setProperties({
      'progress': 0,
      'isUploading': false
    })
  },

  actions: {
    uploadImage() {
      Ember.$('.file-upload').click()
    },
    toggleView(property) {
      this.toggleProperty(property)
    },
    reset() {
      this.initProperty()
    }
  }

});
