import {
  DASHBOARD_REQUEST_INITIATED,
  DASHBOARD_REQUEST_SUCCEED,
  DASHBOARD_REQUEST_FAILED,
} from "../action-type";

const initialState = {
  data: {},
  request: {
    isLoading: false,
    error: null,
  },
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_REQUEST_INITIATED: {
      return {
        ...state,
        request: {
          isLoading: true,
          error: null,
        },
      };
    }
    case DASHBOARD_REQUEST_SUCCEED: {
      return {
        ...state,
        data: action.payload,
        request: {
          isLoading: false,
          error: null,
        },
      };
    }
    case DASHBOARD_REQUEST_FAILED: {
      return {
        ...state,
        request: {
          isLoading: false,
          error: action.error,
        },
      };
    }
    default:
      return state;
  }
};

export default dashboardReducer;
