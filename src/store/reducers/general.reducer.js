import { MASTERDATA_INITIATED, MASTERDATA_SUCCEED, MASTERDATA_FAILED } from "../action-type";
import produce from 'immer';

const initialState = {
  isLoading: false,
  data: {},
  error: null
}

const masterReducer = (state=initialState, action) => {
  switch (action.type) {
    case MASTERDATA_INITIATED: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case MASTERDATA_SUCCEED: {
      return produce(state, draftState => {
        draftState.isLoading = false
        draftState.data = action.payload
        draftState.error = null
      })
    }
    case MASTERDATA_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    default: return state;
  }
}

export default masterReducer;