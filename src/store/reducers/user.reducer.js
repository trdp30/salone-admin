import { USER_LOGGING_IN, USER_LOGGED_OUT, USER_LOGGED_IN } from '../action-type';

const initialState = {
  data: null,
  isLoading: false
}

export default function userUpdate(state = initialState, { type, payload }) {
  switch (type) {
    case USER_LOGGING_IN:
      return { ...initialState, isLoading: true }
    case USER_LOGGED_IN:
      return { data: payload, isLoading: false }
    case USER_LOGGED_OUT:
      return initialState
    default:
      return state
  }
}