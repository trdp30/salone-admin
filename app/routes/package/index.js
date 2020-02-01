import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      packages: A(),
      organizations: this.get('store').findAll('organization')
    })
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('packages', model.packages);
    this.controllerFor('application').set('routeName', 'Packages')
    controller.set('organizations', model.organizations)
    controller.set('selectedOrganization', controller.get('organizations.firstObject'))
    controller.set('columns', A([
      EmberObject.create({ key: "display_name", name: "Display Name" }),
      EmberObject.create({ key: "name", name: "Name" }),
      EmberObject.create({ key: "description", name: "Description" }),
      EmberObject.create({ key: "image_source", name: "Image Source" }),
      EmberObject.create({ key: "orgName", name: "Organization" }),
    ]))
  }
});
