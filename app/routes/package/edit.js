import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this.controllerFor('application').set('routeName', 'Update Package')
    controller.set('model', model)
  }
});
