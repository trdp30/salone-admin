import { schema } from 'normalizr';

export const itemSchema = new schema.Entity('item')
export const itemsSchema = new schema.Array(itemSchema)
export const categorySchema = new schema.Entity('category', {
  items: itemsSchema
})
export const catergoriesSchema = new schema.Array(categorySchema)