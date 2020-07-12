import {
  actionInitiated,
  normalizedData,
  catchReduxError,
} from "./general.action";
import {
  ITEMS_REQUEST_INITIATED,
  ITEMS_REQUEST_SUCCEED,
  ITEMS_REQUEST_FAILED,
} from "../action-type";
import {
  query,
  findRecord,
  createRecord,
  updateRecord,
} from "../async-actions";
import { itemArraySchema, itemSchema } from "../schemas/index.schema";

export const fetchItems = () => {
  return function (dispatch) {
    dispatch(actionInitiated(ITEMS_REQUEST_INITIATED));
    return query("item", { organization_id: 2 })
      .then((response) =>
        dispatch(
          normalizedData({
            data: response,
            modelName: "items",
            type: ITEMS_REQUEST_SUCCEED,
            schema: itemArraySchema,
            relationShips: [],
          })
        )
      )
      .catch((e) => dispatch(catchReduxError(ITEMS_REQUEST_FAILED, e)));
  };
};

export const findItem = (item_id) => {
  return function (dispatch) {
    dispatch(actionInitiated(ITEMS_REQUEST_INITIATED));
    return findRecord("item", item_id)
      .then((response) =>
        dispatch(
          normalizedData({
            data: response,
            modelName: "items",
            type: ITEMS_REQUEST_SUCCEED,
            schema: itemSchema,
            relationShips: [],
          })
        )
      )
      .catch((e) => dispatch(catchReduxError(ITEMS_REQUEST_FAILED, e)));
  };
};

export const createItem = (data) => {
  return function (dispatch) {
    if (data && Object.keys(data) && !Object.keys(data).length) {
      return dispatch(
        catchReduxError(ITEMS_REQUEST_FAILED, "'data' cannot be empty")
      );
    }
    dispatch(actionInitiated(ITEMS_REQUEST_INITIATED));
    return createRecord("item", data)
      .then((response) =>
        dispatch(
          normalizedData({
            data: response,
            modelName: "items",
            type: ITEMS_REQUEST_SUCCEED,
            schema: itemSchema,
            relationShips: [],
          })
        )
      )
      .catch((e) => dispatch(catchReduxError(ITEMS_REQUEST_FAILED, e)));
  };
};

export const updateItem = (id, data) => {
  return function (dispatch) {
    if (id) {
      return dispatch(
        catchReduxError(ITEMS_REQUEST_FAILED, "'id' cannot be empty")
      );
    }
    if (data && Object.keys(data) && !Object.keys(data).length) {
      return dispatch(
        catchReduxError(ITEMS_REQUEST_FAILED, "'data' cannot be empty")
      );
    }
    dispatch(actionInitiated(ITEMS_REQUEST_INITIATED));
    return updateRecord("item", data)
      .then((response) =>
        dispatch(
          normalizedData({
            data: response,
            modelName: "items",
            type: ITEMS_REQUEST_SUCCEED,
            schema: itemSchema,
            relationShips: [],
          })
        )
      )
      .catch((e) => dispatch(catchReduxError(ITEMS_REQUEST_FAILED, e)));
  };
};
