import { CATEGORY_REQUEST_INITIATED, CATEGORY_REQUEST_SUCCEED, CATEGORY_REQUEST_FAILED, ITEM_REQUEST_SUCCEED } from '../action-type';
import { query, findRecord } from '../async-actions';
import { catergoryArraySchema, categorySchema } from '../schemas/index.schema'
import { actionInitiated, catchReduxError, normalizedData } from './general.action';

export const fetchCategories = () => {
  return function(dispatch, getState) {
    // if(getState().category.isLoading) {
    //   return Promise.resolve();
    // }
    dispatch(actionInitiated(CATEGORY_REQUEST_INITIATED))
    return query('category', { organization_id: 2 })
    // .then((response) => dispatch(normalizedData(response, CATEGORY_REQUEST_SUCCEED, catergoryArraySchema)))
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'categories',
      type: CATEGORY_REQUEST_SUCCEED,
      schema: catergoryArraySchema,
      relationShips: [{modelName: 'items', actionType: ITEM_REQUEST_SUCCEED}]
    })))
    .catch((e) => dispatch(catchReduxError(CATEGORY_REQUEST_FAILED, e)))
  }
}

export const findCategory = (category_id) => {
  return function(dispatch, getState) {
    // if(getState().category.isLoading) {
    //   return Promise.resolve();;
    // }
    dispatch(actionInitiated(CATEGORY_REQUEST_INITIATED))
    return findRecord('category', category_id)
    // .then((response) => dispatch(normalizedData(response, CATEGORY_REQUEST_SUCCEED, categorySchema)))
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'categories',
      type: CATEGORY_REQUEST_SUCCEED,
      schema: categorySchema,
      relationShips: [{modelName: 'items', actionType: ITEM_REQUEST_SUCCEED}]
    })))
    .catch((e) => dispatch(catchReduxError(CATEGORY_REQUEST_FAILED, e)))
  }
}