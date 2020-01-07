import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

export default Route.extend({
  model() {
    return this.get('store').findAll('item')
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('model', model);
    controller.set('columns', A([
      EmberObject.create({ key: "name", name: "Name" }),
      EmberObject.create({ key: "category.display_name", name: "Category" }),
      EmberObject.create({ key: "description", name: "Description" }),
      EmberObject.create({ key: "price", name: "Price" }),
    ]))
  }
});
