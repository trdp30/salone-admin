import { CATEGORY_REQUEST_INITIATED, CATEGORY_REQUEST_SUCCEED, CATEGORY_REQUEST_FAILED } from '../action-type';
import produce from "immer"
import { find } from 'lodash';

const initialState = {
  isLoading: false,
  data: {},
  error: null
}

const categoryReducers = (state = initialState, action) => {
  switch(action.type) {
    case CATEGORY_REQUEST_INITIATED : {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case CATEGORY_REQUEST_SUCCEED : {
      return produce(state, draftState => {
        // if(draftState.data && draftState.data.length) {
          // if(action.payload && Array.isArray(action.payload) && action.payload.length) {
          //   action.payload.forEach(data => {
          //     if(find(data))
              
          //   });
          // }
        // } else {
          draftState.isLoading = false
          draftState.error = null
          draftState.data = action.payload
        // }
      })
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

export default categoryReducers;