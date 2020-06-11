import { ITEM_REQUEST_INITIATED, ITEM_REQUEST_SUCCEED, ITEM_REQUEST_FAILED } from '../action-type';
import produce from 'immer';

const initialState = {
  isLoading: false,
  data: {},
  error: null
}

const itemReducers = (state=initialState, action) => {
  switch(action.type) {
    case ITEM_REQUEST_INITIATED: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case ITEM_REQUEST_SUCCEED: {
      return produce(state, draftState => {
        draftState.data = action.payload
        draftState.isLoading = false
        draftState.error = null
      })
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

export default itemReducers;