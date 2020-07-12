import {
  USERS_REQUEST_INITIATED,
  USERS_REQUEST_SUCCEED,
  USERS_REQUEST_FAILED,
} from "../action-type";
import { combineReducers } from "redux";
import { getAllIds, getById } from "./extract_id.reducer";

const initialState = {
  isLoading: false,
  error: null,
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST_INITIATED: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case USERS_REQUEST_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case USERS_REQUEST_FAILED: {
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
  byId: getById("users"),
  allIds: getAllIds("users"),
});

const itemReducer = combineReducers({
  request,
  data: dataReducer,
});

export default itemReducer;
