import { APPOINTMENT_REQUEST_INITIATED, APPOINTMENT_REQUEST_SUCCEED, APPOINTMENT_REQUEST_FAILED } from '../action-type';
import { combineReducers } from 'redux';
import { getById, getAllIds } from './extract_id.reducer';

const initialState = {
  isLoading: false,
  error: null
}

const request = (state=initialState, action) => {
  switch(action.type) {
    case APPOINTMENT_REQUEST_INITIATED : {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case APPOINTMENT_REQUEST_SUCCEED : {
      return {
        ...state,
        isLoading: false,
        error: null
      }
    }
    case APPOINTMENT_REQUEST_FAILED : {
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
  byId: getById('appointment'),
  allIds: getAllIds('appointment')
})

const appointmentReducer = combineReducers({
  request,
  data: dataReducer
})

export default appointmentReducer;