import { ORDERS_REQUEST_INITIATED, ORDERS_REQUEST_SUCCEED, ORDERS_REQUEST_FAILED } from '../action-type';
import { combineReducers } from 'redux';
import { getById, getAllIds } from './extract_id.reducer';

const initialState = {
  isLoading: false,
  error: null
}

const request = (state=initialState, action) => {
  switch(action.type) {
    case ORDERS_REQUEST_INITIATED : {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case ORDERS_REQUEST_SUCCEED : {
      return {
        ...state,
        isLoading: false,
        error: null
      }
    }
    case ORDERS_REQUEST_FAILED : {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default : return state;
  }
}

const rootReducer = (state, action) => ({
  byIs: getById(state, action),
  allIds: getAllIds(state, action)
})

const orderReducer = combineReducers({
  request,
  data: rootReducer
})

export default orderReducer;