import { isArray } from '@ember/array';
import { underscore } from '@ember/string';
import { typeOf } from '@ember/utils';
import DS from 'ember-data';
import _ from 'lodash';

export default DS.JSONSerializer.extend({
  keyForAttribute: function(attr) {
    return _.replace(attr,'-','_');
  },
  keyForRelationship: function(attr) {
    // to do assigned_to relation
    if(typeOf(this.attrsOption) === 'function' && _.includes(_.keys(this.attrsOption(attr)), 'embedded')) {
      return attr
    }
    return underscore(attr) + (typeOf(attr) === 'string' && (attr.endsWith('By') || attr.endsWith('_by')) ? '': '_id');
  },

  serializeAttribute(snapshot, json, key, attributes) {
    if (snapshot.record.get('isNew') || snapshot.changedAttributes()[key]) {
      this._super(snapshot, json, key, attributes);
    }
  },

  normalizeResponse (store, primaryModelClass, payload, id, requestType){
    if(isArray(payload)){
      payload.forEach((item)=> {
        item.links = item._links;
      });
    } else {
      payload.links = payload._links
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  extractMeta(store, typeClass, payload) {
    if (payload && payload.hasOwnProperty('meta')) {
      let meta = payload.meta;
      delete payload.meta;
      return meta;
    }
  }
});
