// import * as Sentry from '@sentry/browser';

export const onError = (type, error) => {
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