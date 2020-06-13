import { CATEGORY_REQUEST_INITIATED, CATEGORY_REQUEST_SUCCEED, CATEGORY_REQUEST_FAILED } from '../action-type';
import { combineReducers } from 'redux';
import { getById, getAllIds } from './extract_id.reducer';

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

const rootReducer = (state, action) => ({
  byIs: getById(state, action),
  allIds: getAllIds(state, action)
})

const categoryReducer = combineReducers({
  request,
  data: rootReducer
})

export default categoryReducer;