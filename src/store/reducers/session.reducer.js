import { SESSION_AUTHENTICATING, SESSION_AUTHENTICATED, SESSION_AUTHENTICATION_FAILED, SESSION_UNAUTHENTICATED } from "../action-type";

const initialState = {
  isAuthenticating: false,
  isAuthencated: false,
  error: null
}
export default function session(state=initialState, action) {
  switch (action.type) {
    case SESSION_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: true,
        error: null
      }
    case SESSION_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticating: false,
        isAuthencated: true,
        error: null
      }
    }
    case SESSION_AUTHENTICATION_FAILED: {
      return {
        ...state,
        isAuthenticating: false,
        isAuthencated: false, //if failed we have retry without login the user out.
        error: action.error
      }
    }
    case SESSION_UNAUTHENTICATED: {
      return {
        ...state,
        isAuthenticating: false,
        isAuthencated: false,
        error: null
      }
    }
    default: return state;
  }
}