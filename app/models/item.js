import DS from 'ember-data';

export default DS.Model.extend({
  category            : DS.belongsTo('category'),
  created_at          : DS.attr('date'),
  created_by          : DS.attr('number'),
  description         : DS.attr('string'),
  is_deleted          : DS.attr('boolean'),
  name                : DS.attr('string'),
  price               : DS.attr('number'),
  updated_at          : DS.attr('date'),
  updated_by          : DS.attr('number'),
});
