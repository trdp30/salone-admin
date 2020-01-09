import DS from 'ember-data';

export default DS.Model.extend({
  name            : DS.attr('string'),
  created_at      : DS.attr('date'),
  updated_at      : DS.attr('date'),
  created_by      : DS.attr('number'),
  updated_by      : DS.attr('number'),
  is_deleted      : DS.attr('boolean'),
});
