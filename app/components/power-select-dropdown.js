import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import _ from 'lodash';

export default Component.extend({
  store: service(),

  listSource: computed('name', 'modelName', 'organization_id', function() {
    let query = _.omitBy(this.getProperties(['name', 'organization_id']), _.isNil);
    _.merge(query, this.get('modelQuery') || {});
    return this.get('store').query(this.get('modelName'), query)
  }),

  actions: {
    searchAction(searchText) {
      if(_.trim(searchText)) {
        this.set('name', searchText);
      } else {
        this.set('name', null);
      }
    },

    onchange(option) {
      this.sendAction('customAction', option)
    },

    onclose() {
      this.set('s', null);
    }
  }
});
