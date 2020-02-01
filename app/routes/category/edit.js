import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this.controllerFor('application').set('routeName', 'Update Category')
    controller.set('model', model)
  }
});
