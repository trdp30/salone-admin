export const getAllIds = (modelName) => {
  return (state=[], action) => {
    if(action && action.type && typeof(action.type) == 'string' && modelName &&
      typeof(modelName) == 'string' && action.type.toLowerCase().includes(modelName.toLowerCase()) &&
      action.payload && action.payload.result && action.payload.entities && action.payload.entities[modelName]) {
      if(Array.isArray(action.payload.result) && action.payload.result.length) {
        return action.payload.result //need to abstraction fron byId reducer if not updating automatically
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
    if(action && action.type && typeof(action.type) == 'string' && modelName &&
      typeof(modelName) == 'string' && action.type.toLowerCase().includes(modelName.toLowerCase()) &&
      payload && payload.entities && payload.entities[modelName] && payload.result) {
      return {
        ...state,
        ...payload.entities[modelName]
      }
    } else {
      return state;
    }
  }
}