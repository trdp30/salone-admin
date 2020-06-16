import { includes } from 'lodash';
import produce from 'immer';

export const getAllIds = (modelName) => {
  return (state=[], action) => {
    if(action && action.type && typeof(action.type) == 'string' && modelName &&
      typeof(modelName) == 'string' && action.type.toLowerCase().includes(modelName.toLowerCase()) &&
      action.payload && action.payload.result && action.payload.entities && action.payload.entities[modelName]) {
      // Need to modify more
      return produce(state, draftState => {
        if(Array.isArray(action.payload.result) && action.payload.result.length) {
          action.payload.result.forEach((result) => {
            if(!includes(draftState, result)) {
              draftState.push(result)
            }
          })
        } else {
          if(!includes(draftState, action.payload.result)) {
            draftState.push(action.payload.result)
          }
        }
      })
    } else {
      return state
    }
  }
}

export const getById = (modelName) => {
  return (state={}, action) => {
    const { payload } = action
    if(action && action.type && typeof(action.type) == 'string' && modelName &&
      typeof(modelName) == 'string' && action.type.toLowerCase().includes(modelName.toLowerCase()) &&
      payload && payload.entities && payload.entities[modelName] && payload.result) {
      // Need to modify more
      return produce(state, draftState => {
        if(Array.isArray(action.payload.result) && action.payload.result.length) {
          action.payload.result.forEach((result) => {
            draftState[result] = payload.entities[modelName][result]
          })
        } else {
          draftState[action.payload.result] = payload.entities[modelName][action.payload.result]
        }
      })
    } else {
      return state;
    }
  }
}