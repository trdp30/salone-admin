import { REGISTER_INITIATED, REGISTER_SUCCEED, REGISTER_FAILED } from "../action-type";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
}

export default function registration(state=initialState, action) {
  switch (action.type) {
    case REGISTER_INITIATED: {
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null
      }
    }
    case REGISTER_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    default: return state;
  }
}