import { CatchReduxError, ActionInitiated, ActionSucceed } from "./general.action";
import { REGISTER_INITIATED, REGISTER_SUCCEED, REGISTER_FAILED } from "../action-type";
import { createRecord } from "../async-actions";

export function requestOtp(username) {
  return async function(dispatch) {
    try {
      if(!username) {
        throw new Error('"username", cannot be empty')
      }
      dispatch(ActionInitiated(REGISTER_INITIATED))
      const reponse = await createRecord('/admin/login', { email: username })
      return dispatch(ActionSucceed(REGISTER_SUCCEED, reponse))
    } catch (e) {
      return dispatch(CatchReduxError(REGISTER_FAILED, e))
    }
  }
}