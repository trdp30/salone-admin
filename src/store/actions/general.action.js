// import * as Sentry from '@sentry/browser';
import { normalize } from 'normalizr';

export const catchReduxError = (type, error) => {
  if(!type) {
    throw new Error('"type" cannot be null')
  } else if(!error) {
    throw new Error('"error" cannot be null')
  }
  // Sentry.captureException(error)
  if(error && error.response && error.response.data) {
    return {
      type: type,
      error: error.response.status >= 500 ? { message: "Something went worng" } : error.response.data
    }
  } else {
    return {
      type: type,
      error: error
    }
  }
}

export const actionInitiated = (type) => {
  if(!type) {
    return catchReduxError()
  }
  return { type: type }
}

export const normalizedData = (data, type, schema) => {
  return function(dispatch) {
    if(data && data.data) {
      return dispatch(actionSucceed(type, normalize(data.data, schema)))
    } else {
      return dispatch(actionSucceed(type, normalize(data, schema)))
    }
  }
}

export const actionSucceed = (type, payload) => {
  if(!type || !payload) {
    return catchReduxError(type, 'Either "type" or "payload" is undefined')
  }
  if(payload && payload.data) {
    return {
      type: type,
      payload: payload.data
    }
  } else {
    return {
      type: type,
      payload: payload
    }
  }
}