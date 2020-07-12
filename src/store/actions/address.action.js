import {
  ADDRESS_REQUEST_INITIATED,
  ADDRESS_REQUEST_SUCCEED,
  ADDRESS_REQUEST_FAILED,
} from "../action-type";
import { query, findRecord } from "../async-actions";
import { addressArraySchema, addressSchema } from "../schemas/index.schema";
import {
  actionInitiated,
  catchReduxError,
  normalizedData,
} from "./general.action";

export const fetchAddresses = (q = {}) => {
  return function (dispatch) {
    dispatch(actionInitiated(ADDRESS_REQUEST_INITIATED));
    return query("address", { organization_id: 2, ...q })
      .then((response) =>
        dispatch(
          normalizedData({
            data: response,
            modelName: "address",
            type: ADDRESS_REQUEST_SUCCEED,
            schema: addressArraySchema,
            relationShips: [],
          })
        )
      )
      .catch((e) => dispatch(catchReduxError(ADDRESS_REQUEST_FAILED, e)));
  };
};

export const fetchAddress = (address_id) => {
  return function (dispatch) {
    dispatch(actionInitiated(ADDRESS_REQUEST_INITIATED));
    return findRecord("address", address_id)
      .then((response) =>
        dispatch(
          normalizedData({
            data: response,
            modelName: "address",
            type: ADDRESS_REQUEST_SUCCEED,
            schema: addressSchema,
            relationShips: [],
          })
        )
      )
      .catch((e) => dispatch(catchReduxError(ADDRESS_REQUEST_FAILED, e)));
  };
};
