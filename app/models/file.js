import DS from 'ember-data';

export default DS.Model.extend({
  bucket          : DS.attr('string'),
  fullPath        : DS.attr('string'),
  name            : DS.attr('string'),
  file_source     : DS.attr('string')
});
