import { CARTITEMS_REQUEST_INITIATED, CARTITEMS_REQUEST_SUCCEED, CARTITEMS_REQUEST_FAILED, ITEMS_REQUEST_SUCCEED, PACKAGES_REQUEST_SUCCEED } from '../action-type';
import { query, findRecord } from '../async-actions';
import { cartItemArraySchema, cartItemSchema } from '../schemas/index.schema'
import { actionInitiated, catchReduxError, normalizedData } from './general.action';

export const fetchCartItems = () => {
  return function(dispatch) {
    dispatch(actionInitiated(CARTITEMS_REQUEST_INITIATED))
    return query('cart-item', { organization_id: 2 })
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'cartItems',
      type: CARTITEMS_REQUEST_SUCCEED,
      schema: cartItemArraySchema,
      relationShips: [
        { modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED },
        { modelName: 'packages', actionType: PACKAGES_REQUEST_SUCCEED }
      ]
    })))
    .catch((e) => dispatch(catchReduxError(CARTITEMS_REQUEST_FAILED, e)))
  }
}

export const findCartItem = (cart_item_id) => {
  return function(dispatch) {
    dispatch(actionInitiated(CARTITEMS_REQUEST_INITIATED))
    return findRecord('cart-item', cart_item_id)
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'cartItems',
      type: CARTITEMS_REQUEST_SUCCEED,
      schema: cartItemSchema,
      relationShips: [
        { modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED },
        { modelName: 'packages', actionType: PACKAGES_REQUEST_SUCCEED }
      ]
    })))
    .catch((e) => dispatch(catchReduxError(CARTITEMS_REQUEST_FAILED, e)))
  }
}