import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      orders: A(),
      organizations: this.get('store').findAll('organization')
    })
  },

  setupController(controller, model) {
    this._super(...arguments);
    this.controllerFor('application').set('routeName', 'Orders')
    controller.set('organizations', model.organizations)
    controller.set('orders', model.orders)
    controller.set('selectedOrganization', controller.get('organizations.firstObject'))
    controller.set('columns', A([
      EmberObject.create({ key: "user.name", name: "Customer Name", width: '20%' }),
      EmberObject.create({ key: "cartItems", name: "Items", width: '20%' }),
      EmberObject.create({ key: "appointment", name: "Appointment details", width: '20%' }),
      EmberObject.create({ key: "total_paid", name: "Total Paid", width: '10%' }),
      EmberObject.create({ key: "formatedStatus", name: "Appointment status", width: '15%' }),
      EmberObject.create({ key: "address.formatedAddress", name: "Address" }),
    ]))
  }
});
