/* eslint-disable eqeqeq */
import { ADD_BULK_TO_APP_STATE, APPEND_ITEM_TO_APP_STATE, REMOVE_ITEM_FROM_APP_STATE, CLEAR_APP_STATE } from '../action-type';
import localforage from 'localforage';
import { findIndex } from 'lodash';

export const getAppState = () => {
  return async function(dispatch) {
    let res = await localforage.getItem('tv.attend.external-assessment') //how will we fetch invite id in between the assessment while refresh the page.
    return dispatch({
      type: ADD_BULK_TO_APP_STATE,
      data: res
    })
  }
}

export const addItem = (key, value, type="object") => {
  return async function(dispatch, getState) {
    let { appState } = getState()
    if(type == "array" && key == "questionStat" && appState.data[key]) {
      let index = findIndex(appState.data[key], ["question_id", parseInt(value.question_id)])
      if(index != -1) {
        appState.data[key] = appState.data[key].filter((data) => data.question_id !== value.question_id)
      }
      appState.data[key].push(value)
    } else {
      appState.data[key] = value
    }
    return dispatch(addBulk(appState.data))
  }
}

export const addBulk = (object) => {
  return async (dispatch) => {
    let res = await localforage.setItem('tv.attend.external-assessment', object);
    return dispatch({
      type: ADD_BULK_TO_APP_STATE,
      data: res
    })
  }
}

export const removeItem = (key=null, value=null, removeBy=null) => {
  return {
    type: REMOVE_ITEM_FROM_APP_STATE,
    key: key,
    value: value, 
    removeBy: removeBy
  }
}

export const clearState = () => {
  return async (dispatch) => {
    await localforage.removeItem('tv.attend.external-assessment')
    return dispatch({
      type: CLEAR_APP_STATE
    })
  }
}

export const append = (key, value) => {
  return {
    type: APPEND_ITEM_TO_APP_STATE,
    key: key,
    value: value
  }
}
