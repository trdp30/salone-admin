export const getRecord = (entities, type, id) => {
  if(entities && entities[type] && entities) {
    return entities[type][id]
  } else {
    return {}
  }
}