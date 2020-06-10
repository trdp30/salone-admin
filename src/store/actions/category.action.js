import { CATEGORY_REQUEST_INITIATED, CATEGORY_REQUEST_SUCCEED, CATEGORY_REQUEST_FAILED } from '../action-type';
import { query, findRecord } from '../async-actions';
import { catergoriesSchema, categorySchema } from '../schemas/index.schema'
import { actionInitiated, catchReduxError, normalizedData } from './general.action';

export const fetchCategories = () => {
  return function(dispatch) {
    dispatch(actionInitiated(CATEGORY_REQUEST_INITIATED))
    return query('category', { organization_id: 2 })
    .then((response) => dispatch(normalizedData(response, CATEGORY_REQUEST_SUCCEED, catergoriesSchema)))
    .catch((e) => dispatch(catchReduxError(CATEGORY_REQUEST_FAILED, e)))
  }
}

export const findCategory = (category_id) => {
  return function(dispatch) {
    console.log(categorySchema)
    dispatch(actionInitiated(CATEGORY_REQUEST_INITIATED))
    return findRecord('category', category_id)
    .then((response) => dispatch(normalizedData(response, CATEGORY_REQUEST_SUCCEED, categorySchema)))
    .catch((e) => dispatch(catchReduxError(CATEGORY_REQUEST_FAILED, e)))
  }
}