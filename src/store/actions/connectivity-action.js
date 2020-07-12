import { NETWORK_AVAIABLE, NETWORK_UNAVAIABLE } from "../action-type";

export const onNetworkAvailable = () => {
  return {
    type: NETWORK_AVAIABLE,
  };
};

export const onNetworkUnavailable = () => {
  return {
    type: NETWORK_UNAVAIABLE,
  };
};
