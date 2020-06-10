import { actionInitiated, normalizedData, catchReduxError } from "./general.action"
import { ITEM_REQUEST_INITIATED, ITEM_REQUEST_SUCCEED, ITEM_REQUEST_FAILED, CATEGORY_REQUEST_SUCCEED } from "../action-type"
import { query, findRecord } from "../async-actions"
import { itemsSchema, itemSchema } from "../schemas/index.schema"

export const fetchItems = () => {
  return function(dispatch) {
    dispatch(actionInitiated(ITEM_REQUEST_INITIATED))
    return query('item', {organization_id: 2})
    .then((response) => dispatch(normalizedData(response, ITEM_REQUEST_SUCCEED, itemsSchema)))
    .catch((e) => dispatch(catchReduxError(ITEM_REQUEST_FAILED, e)))
  }
}

export const findItem = (item_id) => {
  return function(dispatch) {
    dispatch(actionInitiated(ITEM_REQUEST_INITIATED))
    return findRecord('item', item_id)
    .then((response) => dispatch(normalizedData(response, CATEGORY_REQUEST_SUCCEED, itemSchema)))
    .catch((e) => dispatch(catchReduxError(ITEM_REQUEST_FAILED, e)))
  }
}