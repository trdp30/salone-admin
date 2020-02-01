import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').createRecord('package')
  },

  setupController(controller, model) {
    this._super(...arguments);
    this.controllerFor('application').set('routeName', 'Create Package')
    controller.set('model', model);
  },
});
