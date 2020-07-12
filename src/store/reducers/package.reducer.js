import {
  PACKAGES_REQUEST_INITIATED,
  PACKAGES_REQUEST_SUCCEED,
  PACKAGES_REQUEST_FAILED,
} from "../action-type";
import { combineReducers } from "redux";
import { getById, getAllIds } from "./extract_id.reducer";

const initialState = {
  isLoading: false,
  error: null,
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case PACKAGES_REQUEST_INITIATED: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case PACKAGES_REQUEST_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case PACKAGES_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

const dataReducer = combineReducers({
  byId: getById("packages"),
  allIds: getAllIds("packages"),
});

const packageReducer = combineReducers({
  request,
  data: dataReducer,
});

export default packageReducer;
