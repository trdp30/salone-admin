import { schema } from 'normalizr';

export const itemSchema = new schema.Entity('items')
export const itemsSchema = new schema.Array(itemSchema)
export const categorySchema = new schema.Entity('categories', {
  items: itemsSchema
})
export const catergoriesSchema = new schema.Array(categorySchema)
itemSchema.define({category_id: categorySchema})