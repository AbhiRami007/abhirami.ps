import ListActionTypes from "./list-types";

const INITIAL_STATE = {
  listItems: [],
  searchItem: ""
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListActionTypes.ADD_ITEM:
      return {
        ...state,
        listItems: [...state.listItems, action.payload.list]
      };
    case ListActionTypes.LIST_ITEM:
      return {
        ...state
      };
    case ListActionTypes.SEARCH_ITEM:
      return {
        ...state,
        listItems: [action.payload.list],
        searchItem: action.payload.searchValue
      };
    default:
      return state;
  }
};

export default reducer;
