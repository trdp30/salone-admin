export const getAllIds = (modelName) => {
  return (state=[], action) => {
    if(action && action.type && typeof(action.type) == 'string' && action.type.toLowerCase().includes(modelName) && action.payload && action.payload.result && action.payload.entities && action.payload.entities[modelName]) {
      if(Array.isArray(action.payload.result) && action.payload.result.length) {
        return action.payload.result
      } else {
        return [action.payload.result]
      }
    } else {
      return state
    }
  }
}

export const getById = (modelName) => {
  return (state={}, action) => {
    const { payload } = action
    if(action && action.type && typeof(action.type) == 'string' && action.type.toLowerCase().includes(modelName) && payload && payload.entities && payload.entities[modelName] && payload.result) {
      return {
        ...state,
        ...payload.entities[modelName]
      }
    } else {
      return state;
    }
  }
}