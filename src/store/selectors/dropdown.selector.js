import {
  createSelector
} from "reselect";

export const getListSource = () =>
  createSelector(
    (state, modelName) => state[modelName].data.byId,
    (result) => {
      if (result) {
        return Object.keys(result).map((id) => result[id]);
      }
      return [];
    }
  );