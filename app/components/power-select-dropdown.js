import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import _ from 'lodash';

export default Component.extend({
  store: service(),

  listSource: computed('s', 'modelName', 'organization_id', function() {
    let query = _.omitBy(this.getProperties(['s', 'organization_id']), _.isNil);
    _.merge(query, this.get('modelQuery') || {});
    return this.get('store').query(this.get('modelName'), query)
  }),

  actions: {
    searchAction(searchText) {
      if(_.trim(searchText)) {
        this.set('s', searchText);
      } else {
        this.set('s', null);
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
