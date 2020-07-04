import { CATEGORIES_REQUEST_INITIATED, CATEGORIES_REQUEST_SUCCEED, CATEGORIES_REQUEST_FAILED } from '../action-type';
import { combineReducers } from 'redux';
import { getById, getAllIds } from './extract_id.reducer';

const initialState = {
  isLoading: false,
  error: null
}

const request = (state=initialState, action) => {
  switch(action.type) {
    case CATEGORIES_REQUEST_INITIATED : {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case CATEGORIES_REQUEST_SUCCEED : {
      return {
        ...state,
        isLoading: false,
        error: null
      }
    }
    case CATEGORIES_REQUEST_FAILED : {
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
  byId: getById('categories'),
  allIds: getAllIds('categories')
})

const categoryReducer = combineReducers({
  request,
  data: dataReducer
})

export default categoryReducer;