import DS from 'ember-data';

export default DS.Model.extend({
  name                    : DS.attr('string'),
  items                   : DS.attr(),
  mrp_price               : DS.attr('string'),
  price                   : DS.attr('string'),
  image_source            : DS.attr('string'),
  file                    : DS.belongsTo('file'),
  organization            : DS.belongsTo('organization'),
  poster_image_source     : DS.attr('string'),
  description             : DS.attr('string')
});
