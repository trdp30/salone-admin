import { ADDRESS_REQUEST_INITIATED, ADDRESS_REQUEST_SUCCEED, ADDRESS_REQUEST_FAILED } from '../action-type';
import { combineReducers } from 'redux';
import { getById, getAllIds } from './extract_id.reducer';

const initialState = {
  isLoading: false,
  error: null
}

const request = (state=initialState, action) => {
  switch(action.type) {
    case ADDRESS_REQUEST_INITIATED : {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case ADDRESS_REQUEST_SUCCEED : {
      return {
        ...state,
        isLoading: false,
        error: null
      }
    }
    case ADDRESS_REQUEST_FAILED : {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default : return state;
  }
}

const dataReducer = combineReducers({
  byId: getById('address'),
  allIds: getAllIds('address')
})

const addressReducer = combineReducers({
  request,
  data: dataReducer
})

export default addressReducer;