import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
  host: "https://homswag.herokuapp.com",
  namespace: "api/v1",
  headers: computed(function() {
    return {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTgxMzU5Mzg3LCJleHAiOjE1ODIyMjMzODd9.4gYOULm9EifKcUhLI_PZM41FqWcBh1-UfP27V-ipRfc",
    }
  })
});
