import { ITEM_REQUEST_SUCCEED, CATEGORY_REQUEST_SUCCEED } from '../action-type';

const collecctId = (state, payload) => {
  if(payload.result && Array.isArray(payload.result)) {
    if(payload.result.length) {
      return payload.result
    } else {
      return payload.result
    }
  } else {
    return [payload.result]
  }
}

export const getAllIds = (state, action) => {
  switch(action.type) {
    case ITEM_REQUEST_SUCCEED: {
      return collecctId(state, action.payload)
    }
    case CATEGORY_REQUEST_SUCCEED: {
      return collecctId(state, action.payload)
    }
    default : return state;
  }
}

export const getById = (state={}, action) => {
  switch(action.type) {
    case ITEM_REQUEST_SUCCEED : {
      return {
        ...state,
        ...action.payload.entities.items
      }
    }
    case CATEGORY_REQUEST_SUCCEED: {
      return {
        ...state,
        ...action.payload.entities.categories
      }
    }
    default : return state;
  }
}