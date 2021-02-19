import { createStore } from "redux";

const INITIAL_STATE = {
  history: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_IMAGE_DATA":
      return { ...state, history: [...action.payload] };
    default:
      return state;
  }
};

const store = createStore(reducer);

export const setImage = (imageData) => ({
  type: "SET_IMAGE_DATA",
  payload: imageData,
});

export default store;
