import { CARTITEMS_REQUEST_INITIATED, CARTITEMS_REQUEST_SUCCEED, CARTITEMS_REQUEST_FAILED } from '../action-type';
import { combineReducers } from 'redux';
import { getById, getAllIds } from './extract_id.reducer';

const initialState = {
  isLoading: false,
  error: null
}

const request = (state=initialState, action) => {
  switch(action.type) {
    case CARTITEMS_REQUEST_INITIATED : {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case CARTITEMS_REQUEST_SUCCEED : {
      return {
        ...state,
        isLoading: false,
        error: null
      }
    }
    case CARTITEMS_REQUEST_FAILED : {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    default : return state;
  }
}

const dataReducer = combineReducers({
  byId: getById('cartItems'),
  allIds: getAllIds('cartItems')
})

const cartItemReducer = combineReducers({
  request,
  data: dataReducer
})

export default cartItemReducer;