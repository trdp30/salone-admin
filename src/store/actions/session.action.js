import { catchReduxError, actionInitiated } from "./general.action";
import {
  SESSION_AUTHENTICATING,
  SESSION_AUTHENTICATED,
  SESSION_UNAUTHENTICATED,
} from "../action-type";
import {
  createRecord,
  initializeAxiosHeader,
  removeAxiosHeader,
} from "../async-actions";

const key = "capaz_token";

//Unauthenticate Session
export function invalidate() {
  return clear();
}

//Authenticate Session
export function authenticated(username, verification_code) {
  return async function (dispatch) {
    try {
      if (!username) {
        throw new Error('"username" cannot be null');
      }
      if (!verification_code) {
        throw new Error('"verification_code" cannot be null');
      }
      dispatch(actionInitiated(SESSION_AUTHENTICATING));
      const response = await createRecord("/oauth", {
        email: username,
        verification_code: verification_code,
      });

      /*
        response should contain belows object
        {
          "access_token":"2YotnFZFEjr1zCsicMWpAA",
          "token_type":"bearer",
          "expires_in":3600, // optional
          "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA" // optional
        }
       */

      if (response && response.data) {
        return dispatch(persist(response.data));
      } else {
        throw new Error("Invalid response");
      }
    } catch (e) {
      dispatch(catchReduxError("SESSION_AUTHENTICATION_FAILED", e));
    }
  };
}

const persist = (data) => {
  return function (dispatch) {
    if (data && Object.keys(data).length && data.access_token) {
      data = JSON.stringify(data || {});
      localStorage.setItem(key, data);
      return dispatch(isAuthenticated());
    } else {
      throw new Error('"access_token" cannot be undefined');
    }
  };
};

//Check is session authenticated
export function isAuthenticated() {
  const data = restore();
  if (
    data &&
    Object.keys(data).length &&
    data.access_token &&
    data.refresh_token
  ) {
    initializeAxiosHeader(data.access_token);
    return {
      type: SESSION_AUTHENTICATED,
    };
  }
  removeAxiosHeader();
  return {
    type: SESSION_UNAUTHENTICATED,
  };
}

//Responsibility of restore is to return a json object
const restore = () => {
  let data = localStorage.getItem(key);
  if (data && data.length) {
    return JSON.parse(data);
  }
  return {};
};

const clear = () => {
  return function (dispatch) {
    localStorage.removeItem(key);
    return dispatch(isAuthenticated());
  };
};
