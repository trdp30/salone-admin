import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
  host: "https://homswag.herokuapp.com",
  namespace: "api/v1",
  headers: computed(function() {
    return {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgwMzI5MDY0LCJleHAiOjE1ODA3NjEwNjR9.pm51bZjJlcRgmk4GpOj-j9FcJt9_9TEY_6UB0N9j5p8",
    }
  })
});