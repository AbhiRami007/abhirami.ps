import ListActionTypes from "./list-types";

export const listItem = () => ({
  type: ListActionTypes.LIST_ITEM
});

export const addItem = (item) => ({
  type: ListActionTypes.ADD_ITEM,
  payload: item
});

export const searchItem = (item) => ({
  type: ListActionTypes.SEARCH_ITEM,
  payload: item
});
