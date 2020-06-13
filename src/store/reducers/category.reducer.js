import { CATEGORY_REQUEST_INITIATED, CATEGORY_REQUEST_SUCCEED, CATEGORY_REQUEST_FAILED } from '../action-type';
import produce from "immer"
import { find } from 'lodash';
import { combineReducers } from 'redux';

const initialState = {
  isLoading: false,
  error: null
}

const request = (state=initialState, action) => {
  switch(action.type) {
    case CATEGORY_REQUEST_INITIATED : {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case CATEGORY_REQUEST_SUCCEED : {
      return {
        ...state,
        isLoading: false,
        error: null
      }
    }
    case CATEGORY_REQUEST_FAILED : {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default : return state;
  }
}

const byId = (state={}, action) => {
  switch(action.type) {
    case CATEGORY_REQUEST_SUCCEED : {
      return {
        ...state,
        ...action.payload.entities.categories
      }
    }
    default : return state;
  }
}

const allIds = (state=[], action) => {
  switch(action.type) {
    case CATEGORY_REQUEST_SUCCEED : {
      if(action.payload.result && Array.isArray(action.payload.result)) {
        if(action.payload.result.length) {
          return action.payload.result
        } else {
          return action.payload.result
        }
      } else {
        return [action.payload.result]
      }
    }
    default : return state;
  }
}

const categoryReducer = combineReducers({
  byId,
  allIds
})

const model = combineReducers({
  request,
  data: categoryReducer
})

export default model;