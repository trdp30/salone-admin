import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  created_at        : DS.attr("date"),
  updated_at        : DS.attr("date"),
  created_by        : DS.belongsTo("user"),
  updated_by        : DS.belongsTo("user"),
  is_deleted        : DS.attr('boolean'),
  is_default        : DS.attr('boolean'),
  address           : DS.attr(),
  user              : DS.belongsTo('user'),

  formatedAddress: computed('address', function(){
    return this.get('address.formatedAddress')
  })
});
