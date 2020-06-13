import { CATEGORIES_REQUEST_INITIATED, CATEGORIES_REQUEST_SUCCEED, CATEGORIES_REQUEST_FAILED, ITEMS_REQUEST_SUCCEED } from '../action-type';
import { query, findRecord } from '../async-actions';
import { catergoryArraySchema, categorySchema } from '../schemas/index.schema'
import { actionInitiated, catchReduxError, normalizedData } from './general.action';

export const fetchCategories = () => {
  return function(dispatch, getState) {
    dispatch(actionInitiated(CATEGORIES_REQUEST_INITIATED))
    return query('category', { organization_id: 2 })
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'categories',
      type: CATEGORIES_REQUEST_SUCCEED,
      schema: catergoryArraySchema,
      relationShips: [{modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED}]
    })))
    .catch((e) => dispatch(catchReduxError(CATEGORIES_REQUEST_FAILED, e)))
  }
}

export const findCategory = (category_id) => {
  return function(dispatch) {
    dispatch(actionInitiated(CATEGORIES_REQUEST_INITIATED))
    return findRecord('category', category_id)
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'categories',
      type: CATEGORIES_REQUEST_SUCCEED,
      schema: categorySchema,
      relationShips: [{modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED}]
    })))
    .catch((e) => dispatch(catchReduxError(CATEGORIES_REQUEST_FAILED, e)))
  }
}