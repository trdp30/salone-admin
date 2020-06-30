import { CATEGORIES_REQUEST_INITIATED, CATEGORIES_REQUEST_SUCCEED, CATEGORIES_REQUEST_FAILED, ITEMS_REQUEST_SUCCEED } from '../action-type';
import { query, findRecord, createRecord, updateRecord } from '../async-actions';
import { catergoryArraySchema, categorySchema } from '../schemas/index.schema'
import { actionInitiated, catchReduxError } from './general.action';
import { normalizeData } from 'normalize-reducer';

export const fetchCategories = () => {
  return function(dispatch, getState) {
    dispatch(actionInitiated(CATEGORIES_REQUEST_INITIATED))
    return query('category', { organization_id: 2 })
    .then((response) => dispatch(normalizeData({
      response,
      modelName: 'categories',
      type: CATEGORIES_REQUEST_SUCCEED,
      schemaType: catergoryArraySchema,
      relationShips: [{modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED}]
    })))
    .catch((e) => dispatch(catchReduxError(CATEGORIES_REQUEST_FAILED, e)))
  }
}

export const findCategory = (category_id) => {
  return function(dispatch) {
    dispatch(actionInitiated(CATEGORIES_REQUEST_INITIATED))
    return findRecord('category', category_id)
    .then((response) => dispatch(normalizeData({
      response,
      modelName: 'categories',
      type: CATEGORIES_REQUEST_SUCCEED,
      schemaType: categorySchema,
      relationShips: [{modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED}]
    })))
    .catch((e) => dispatch(catchReduxError(CATEGORIES_REQUEST_FAILED, e)))
  }
}

export const createCategory = (data) => {
  return function(dispatch) {
    if(data && Object.keys(data) && !Object.keys(data).length) {
      return dispatch(catchReduxError(CATEGORIES_REQUEST_FAILED, "'data' cannot be empty"))
    }
    dispatch(actionInitiated(CATEGORIES_REQUEST_INITIATED))
    return createRecord('category', data)
    .then((response) => dispatch(normalizeData({
      response,
      modelName: 'categories',
      type: CATEGORIES_REQUEST_SUCCEED,
      schemaType: categorySchema,
      relationShips: [{modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED}]
    })))
    .catch((e) => dispatch(catchReduxError(CATEGORIES_REQUEST_FAILED, e)))
  }
}

export const updateCategory = (id, data) => {
  return function(dispatch) {
    if(id) {
      return dispatch(catchReduxError(CATEGORIES_REQUEST_FAILED, "'id' cannot be empty"))
    }
    if(data && Object.keys(data) && !Object.keys(data).length) {
      return dispatch(catchReduxError(CATEGORIES_REQUEST_FAILED, "'data' cannot be empty"))
    }
    dispatch(actionInitiated(CATEGORIES_REQUEST_INITIATED))
    return updateRecord('category', data)
    .then((response) => dispatch(normalizeData({
      response,
      modelName: 'categories',
      type: CATEGORIES_REQUEST_SUCCEED,
      schemaType: categorySchema,
      relationShips: [{modelName: 'items', actionType: ITEMS_REQUEST_SUCCEED}]
    })))
    .catch((e) => dispatch(catchReduxError(CATEGORIES_REQUEST_FAILED, e)))
  }
}