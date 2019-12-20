import { setFilterType } from "../actions/actions";

const initialState = {
  filters: []
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case setFilterType:
      console.log("Set filter Action");
      return { ...state };

    default:
      return state;
  }
};
