import DS from 'ember-data';

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
  updated_by          : DS.attr('number')
});
