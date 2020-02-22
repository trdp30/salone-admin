import DS from 'ember-data';

export default DS.Model.extend({
  created_at        : DS.attr("date"),
  updated_at        : DS.attr("date"),
  email             : DS.attr("string"),
  name              : DS.attr("string"),
  phone             : DS.attr("number"),
  alt_phone         : DS.attr("number"),
  image_source      : DS.attr("string"),
  file_id           : DS.belongsTo('file')
});
