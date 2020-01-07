import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return this.get('store').findAll('category')
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('model', model);
    controller.set('columns', EmberObject.create({
      key: "name", name: "Name",
      key: "display_name", name: "Display Name",
      key: "description", name: "Description",
      key: "image_source", name: "Image Source",
    }))
  }
});
