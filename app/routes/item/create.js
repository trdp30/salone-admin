import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').createRecord('item')
  },

  setupController(controller, model) {
    this._super(...arguments);
    this.controllerFor('application').set('routeName', 'Create Item')
    controller.set('model', model);
  },
});
