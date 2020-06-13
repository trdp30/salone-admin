import { ITEM_REQUEST_INITIATED, ITEM_REQUEST_SUCCEED, ITEM_REQUEST_FAILED } from '../action-type';
import { combineReducers } from 'redux';
import { getAllIds, getById } from './extract_id.reducer';

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

const rootReducer = (state, action) => ({
  byId: getById(state, action),
  allIds: getAllIds(state, action)
})

const itemReducer = combineReducers({
  request,
  data: rootReducer
})

export default itemReducer;