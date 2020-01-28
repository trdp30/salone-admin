import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "https://homswag.herokuapp.com",
  namespace: "api/v1",
});
// import FirestoreAdapter from 'emberfire/adapters/firestore';

// export default FirestoreAdapter.extend({
//     // Uncomment the following lines to enable offline persistence and multi-tab support
//     // enablePersistence: true,
//     // persistenceSettings: { synchronizeTabs: true }
// });