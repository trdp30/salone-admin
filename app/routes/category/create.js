import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').createRecord('category')
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('model', model);
  },
});
