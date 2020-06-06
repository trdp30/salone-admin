import { USER_LOGGING_IN, USER_LOGGED_OUT, USER_LOGGED_IN } from '../action-type'

export const login = data => dispatch => {
  dispatch({
    type: USER_LOGGING_IN
  })
  // Wait 2 seconds before "logging in"
  setTimeout(() => {
    dispatch({
      type: USER_LOGGED_IN,
      payload: data
    })
  }, 2000)
}

export function logout() {
  return {
    type: USER_LOGGED_OUT
  }
}