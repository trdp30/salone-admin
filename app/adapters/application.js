import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
  host: "https://homswag.herokuapp.com",
  namespace: "api/v1",
  headers: computed(function() {
    return {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTU4NzEwMzk5NCwiZXhwIjoxNTg3OTY3OTk0fQ.ZU7ugcfEzl0giRFSxC6p22AjeXOuyvk7-ajXWNNKDIw",
    }
  }),
  handleResponse: function (status,headers,payload,requestData){
    if(payload){
      if(status >= 400){
        let e = {errors: []};
        if(Array.isArray(payload)) {
          payload.forEach(function(elem){
            e.errors.push({
              detail: elem.message,
              name : elem.name,
            });
          });
        } else {
          e.errors.push({
            details: payload.message,
            status: payload.status,
            name  : payload.name
          });
        }
        payload = e;
      }
    }
    return this._super(status,headers,payload,requestData);
  }

});
