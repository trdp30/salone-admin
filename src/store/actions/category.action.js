import { CATEGORY_REQUEST_INITIATED, CATEGORY_REQUEST_SUCCEED, CATEGORY_REQUEST_FAILED } from '../action-type';
import { findAll, query, findRecord } from '../async-actions';
import { catergoriesSchema, categorySchema } from '../schemas/index.schema'
import { normalize } from 'normalizr';
import { ActionSucceed, ActionInitiated, CatchReduxError } from './general.action';


const normalizedData = (data, type, schema) => {
  console.log(schema)
  return function(dispatch) {
    if(data && data.data) {
      return dispatch(ActionSucceed(type, normalize(data.data, schema)))
    } else {
      return dispatch(ActionSucceed(type, normalize(data, schema)))
    }
  }
}

export const fetchCategories = () => {
  return function(dispatch) {
    dispatch(ActionInitiated(CATEGORY_REQUEST_INITIATED))
    return query('category', { organization_id: 2 })
    .then((response) => dispatch(normalizedData(response, CATEGORY_REQUEST_SUCCEED, catergoriesSchema)))
    .catch((e) => dispatch(CatchReduxError(CATEGORY_REQUEST_FAILED, e)))
  }
}

export const findCategory = (category_id) => {
  return function(dispatch) {
    dispatch(ActionInitiated(CATEGORY_REQUEST_INITIATED))
    return findRecord('category', category_id)
    .then((response) => dispatch(normalizedData(response, CATEGORY_REQUEST_SUCCEED, categorySchema)))
    .catch((e) => dispatch(CatchReduxError(CATEGORY_REQUEST_FAILED, e)))
  }
}