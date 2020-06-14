import { ORDERS_REQUEST_INITIATED, ORDERS_REQUEST_SUCCEED, ORDERS_REQUEST_FAILED, ITEMS_REQUEST_SUCCEED, CARTITEMS_REQUEST_SUCCEED, APPOINTMENT_REQUEST_SUCCEED, PACKAGES_REQUEST_SUCCEED } from '../action-type';
import { query, findRecord } from '../async-actions';
import { orderArraySchema, orderSchema } from '../schemas/index.schema'
import { actionInitiated, catchReduxError, normalizedData } from './general.action';

export const fetchOrders = () => {
  return function(dispatch) {
    dispatch(actionInitiated(ORDERS_REQUEST_INITIATED))
    return query('order', { organization_id: 2 })
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'orders',
      type: ORDERS_REQUEST_SUCCEED,
      schema: orderArraySchema,
      relationShips: [
        { modelName: 'cartItems', actionType: CARTITEMS_REQUEST_SUCCEED },
        { modelName: 'appointment', actionType: APPOINTMENT_REQUEST_SUCCEED },
        { modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED },
        { modelName: 'packages', actionType: PACKAGES_REQUEST_SUCCEED }
      ]
    })))
    .catch((e) => dispatch(catchReduxError(ORDERS_REQUEST_FAILED, e)))
  }
}

export const findOrder = (order_id) => {
  return function(dispatch) {
    dispatch(actionInitiated(ORDERS_REQUEST_INITIATED))
    return findRecord('order', order_id)
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'orders',
      type: ORDERS_REQUEST_SUCCEED,
      schema: orderSchema,
      relationShips: [
        { modelName: 'cartItems', actionType: CARTITEMS_REQUEST_SUCCEED },
        { modelName: 'appointment', actionType: APPOINTMENT_REQUEST_SUCCEED}
      ]
    })))
    .catch((e) => dispatch(catchReduxError(ORDERS_REQUEST_FAILED, e)))
  }
}