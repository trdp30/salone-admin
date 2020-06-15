import { actionInitiated, normalizedData, catchReduxError } from "./general.action"
import { USERS_REQUEST_INITIATED, USERS_REQUEST_SUCCEED, USERS_REQUEST_FAILED } from "../action-type"
import { query, findRecord } from "../async-actions"
import { userArraySchema, userSchema } from "../schemas/index.schema"

export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(actionInitiated(USERS_REQUEST_INITIATED))
    return query('user', {organization_id: 2})
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'user',
      type: USERS_REQUEST_SUCCEED,
      schema: userArraySchema,
      relationShips: []
    })))
    .catch((e) => dispatch(catchReduxError(USERS_REQUEST_FAILED, e)))
  }
}

export const findUser = (user_id) => {
  return function(dispatch) {
    dispatch(actionInitiated(USERS_REQUEST_INITIATED))
    return findRecord('user', user_id)
    .then((response) => dispatch(normalizedData({
      data: response,
      modelName: 'user',
      type: USERS_REQUEST_SUCCEED,
      schema: userSchema,
      relationShips: []
    })))
    .catch((e) => dispatch(catchReduxError(USERS_REQUEST_FAILED, e)))
  }
}