import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
  host: "https://homswag.herokuapp.com",
  namespace: "api/v1",
  headers: computed(function() {
    return {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgwNzg3ODEwLCJleHAiOjE1ODE2NTE4MTB9.sdxot_fqco8A-Ze_-JXrjM6HVKe9XOIK5zL3PHFzjDs",
    }
  })
});
