import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

export default Route.extend({
  model() {
    return this.get('store').findAll('category')
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('model', model);
    controller.set('columns', A([
      EmberObject.create({ key: "display_name", name: "Display Name" }),
      EmberObject.create({ key: "name", name: "Name" }),
      EmberObject.create({ key: "description", name: "Description" }),
      EmberObject.create({ key: "image_source", name: "Image Source" }),
      EmberObject.create({ key: "orgName", name: "Organization" }),
    ]))
  }
});
