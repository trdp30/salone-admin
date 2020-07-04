import { ORDERS_REQUEST_INITIATED, ORDERS_REQUEST_SUCCEED, ORDERS_REQUEST_FAILED, ITEMS_REQUEST_SUCCEED, CARTITEMS_REQUEST_SUCCEED, APPOINTMENT_REQUEST_SUCCEED, PACKAGES_REQUEST_SUCCEED } from '../action-type';
import { query, findRecord, createRecord, updateRecord } from '../async-actions';
import { orderArraySchema, orderSchema } from '../schemas/index.schema'
import { actionInitiated, catchReduxError, normalizedData } from './general.action';

export const fetchOrders = (q) => {
  return function(dispatch) {
    dispatch(actionInitiated(ORDERS_REQUEST_INITIATED))
    return query('order', { organization_id: 2, ...q })
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
        { modelName: 'appointment', actionType: APPOINTMENT_REQUEST_SUCCEED },
        { modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED },
        { modelName: 'packages', actionType: PACKAGES_REQUEST_SUCCEED }
      ]
    })))
    .catch((e) => dispatch(catchReduxError(ORDERS_REQUEST_FAILED, e)))
  }
}

export const createOrder = (data) => {
  return function(dispatch) {
    if(data && Object.keys(data) && !Object.keys(data).length) {
      return dispatch(catchReduxError(ORDERS_REQUEST_FAILED, "'data' cannot be empty"))
    }
    dispatch(actionInitiated(ORDERS_REQUEST_INITIATED))
    return createRecord('category', data)
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'orders',
      type: ORDERS_REQUEST_SUCCEED,
      schema: orderSchema,
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

export const updateOrder = (id, data) => {
  return function(dispatch) {
    if(id) {
      return dispatch(catchReduxError(ORDERS_REQUEST_FAILED, "'id' cannot be empty"))
    }
    if(data && Object.keys(data) && !Object.keys(data).length) {
      return dispatch(catchReduxError(ORDERS_REQUEST_FAILED, "'data' cannot be empty"))
    }
    dispatch(actionInitiated(ORDERS_REQUEST_INITIATED))
    return updateRecord('category', data)
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'orders',
      type: ORDERS_REQUEST_SUCCEED,
      schema: orderSchema,
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