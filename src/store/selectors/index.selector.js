export const getRecord = (data, id) => {
  if(data && data.allIds && data.allIds.length) {
    return data.byId[id]
  } else {
    return {}
  }
}