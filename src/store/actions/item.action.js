import { actionInitiated, normalizedData, catchReduxError } from "./general.action"
import { ITEMS_REQUEST_INITIATED, ITEMS_REQUEST_SUCCEED, ITEMS_REQUEST_FAILED } from "../action-type"
import { query, findRecord } from "../async-actions"
import { itemArraySchema, itemSchema } from "../schemas/index.schema"

export const fetchItems = () => {
  return function(dispatch) {
    dispatch(actionInitiated(ITEMS_REQUEST_INITIATED))
    return query('item', {organization_id: 2})
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'items',
      type: ITEMS_REQUEST_SUCCEED,
      schema: itemArraySchema,
      relationShips: []
    })))
    .catch((e) => dispatch(catchReduxError(ITEMS_REQUEST_FAILED, e)))
  }
}

export const findItem = (item_id) => {
  return function(dispatch) {
    dispatch(actionInitiated(ITEMS_REQUEST_INITIATED))
    return findRecord('item', item_id)
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'items',
      type: ITEMS_REQUEST_SUCCEED,
      schema: itemSchema,
      relationShips: []
    })))
    .catch((e) => dispatch(catchReduxError(ITEMS_REQUEST_FAILED, e)))
  }
}