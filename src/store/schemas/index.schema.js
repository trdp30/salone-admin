import { schema } from 'normalizr';

const itemProcessStrategy = (value, parent, key) => {
  switch (key) {
    case 'items':
      return { ...value, category: parent.id };
    case 'package':
      return { ...value, package: [parent.id] };
    default:
      return { ...value };
  }
};

export const itemSchema = new schema.Entity('items', {}, { processStrategy: itemProcessStrategy });
export const categorySchema = new schema.Entity('categories', {
  items: [itemSchema]
})
export const packageSchema = new schema.Entity('packages', {
  items: [itemSchema]
})

export const itemArraySchema = new schema.Array(itemSchema)
export const catergoryArraySchema = new schema.Array(categorySchema)
export const packageArraySchema =  new schema.Array(packageSchema)

export const orderSchema = new schema.Entity('orders');
export const orderArraySchema =  new schema.Array(orderSchema);

export const userSchema = new schema.Entity('users');
export const userArraySchema = new schema.Array(userSchema)