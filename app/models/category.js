import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  created_at        : DS.attr('date'),
  created_by        : DS.attr('number'),
  description       : DS.attr('string'),
  display_name      : DS.attr('string'),
  file_id           : DS.attr('number'),
  image_source      : DS.attr('string'),
  is_deleted        : DS.attr('boolean'),
  items             : DS.hasMany('item'),
  name              : DS.attr('string'),
  updated_at        : DS.attr('date'),
  updated_by        : DS.attr('number'),
  organization      : DS.belongsTo('organization'),
  hasSubCategory    : DS.attr('boolean', { defaultValue: false }),
  subCateroies      : DS.attr(),

  orgName: computed('organization.isFulfilled', function() {
    if(this.get('organization')) {
      return this.get('organization.name')
    }
  })
});
