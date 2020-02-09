import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name                : DS.attr('string'),
  category            : DS.belongsTo('category'),
  description         : DS.attr('string'),
  price               : DS.attr('number'),
  image_source        : DS.attr('string'),
  created_at          : DS.attr('date'),
  created_by          : DS.attr('number'),
  is_deleted          : DS.attr('boolean'),
  updated_at          : DS.attr('date'),
  updated_by          : DS.attr('number'),
  organization        : DS.belongsTo('organization'),
  mrp_price           : DS.attr('number'),
  sub_category        : DS.attr('string'),
  file                : DS.belongsTo('file'),
  duration            : DS.attr('number'),
  sort_order          : DS.attr('number'),

  orgName: computed('organization.isFulfilled', function() {
    if(this.get('organization')) {
      return this.get('organization.name')
    }
  })
});
