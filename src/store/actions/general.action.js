// import * as Sentry from '@sentry/browser';
import { normalize } from "normalizr";
import { invalidate } from "./session.action";

export const catchReduxError = (type, error) => {
  if (!type) {
    throw new Error('"type" cannot be null');
  } else if (!error) {
    throw new Error('"error" cannot be null');
  }
  // Sentry.captureException(error)
  if (error && error.response && error.response.data) {
    switch (error.response.status) {
      case 401: {
        return function (dispatch) {
          dispatch(invalidate());
          return dispatch({
            type: type,
            error: error.response.data.message,
          });
        };
      }
      case 500: {
        return {
          type: type,
          error: { message: "Something went worng" },
        };
      }
      default: {
        return {
          type: type,
          error: error.response.data,
        };
      }
    }
  } else if (error.message) {
    return {
      type: type,
      error: error.message,
    };
  } else {
    return {
      type: type,
      error: error,
    };
  }
};

export const actionInitiated = (type) => {
  if (!type) {
    return catchReduxError();
  }
  return { type: type };
};

export const normalizedData = ({
  data,
  modelName,
  type,
  schema,
  relationShips,
}) => {
  return function (dispatch) {
    if (data && data.data) {
      let payload = normalize(data.data, schema);
      if (relationShips && relationShips.length) {
        relationShips.forEach((relationShip) => {
          if (payload.entities[relationShip.modelName]) {
            dispatch(
              actionSucceed(relationShip.actionType, {
                entities: {
                  [relationShip.modelName]:
                    payload.entities[relationShip.modelName],
                },
                result: Object.keys(
                  payload.entities[relationShip.modelName]
                ).map((id) => parseInt(id)),
              })
            );
          }
        });
      }
      return dispatch(actionSucceed(type, payload));
    } else {
      return dispatch(actionSucceed(type, normalize(data, schema)));
    }
  };
};

export const actionSucceed = (type, payload) => {
  if (!type || !payload) {
    return catchReduxError(type, 'Either "type" or "payload" is undefined');
  }
  if (payload && payload.data) {
    return {
      type: type,
      payload: payload.data,
    };
  } else {
    return {
      type: type,
      payload: payload,
    };
  }
};
