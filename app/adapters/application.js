import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "http://homswag.herokuapp.com",
  namespace: "api/v1",
});
