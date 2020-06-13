import { ITEM_REQUEST_INITIATED, ITEM_REQUEST_SUCCEED, ITEM_REQUEST_FAILED } from '../action-type';
import produce from 'immer';
import { combineReducers } from 'redux';

const initialState = {
  isLoading: false,
  error: null
}

const request = (state=initialState, action) => {
  switch(action.type) {
    case ITEM_REQUEST_INITIATED: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case ITEM_REQUEST_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        error: null
      }
    }
    case ITEM_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    default: return state;
  }
}

const byId = (state={}, action) => {
  switch(action.type) {
    case ITEM_REQUEST_SUCCEED : {
      return {
        ...state,
        ...action.payload.entities.items
      }
    }
    default : return state;
  }
}

const allIds = (state=[], action) => {
  switch(action.type) {
    case ITEM_REQUEST_SUCCEED : {
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