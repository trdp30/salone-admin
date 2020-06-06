// import * as Sentry from '@sentry/browser';

export const CatchReduxError = (type, error) => {
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

export const ActionInitiated = (type) => {
  if(!type) {
    return CatchReduxError()
  }
  return { type: type }
}

export const ActionSucceed = (type, payload) => {
  if(!type || !payload) {
    return CatchReduxError(type, 'Either "type" or "payload" is undefined')
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