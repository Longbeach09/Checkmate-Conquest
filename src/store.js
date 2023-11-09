import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer.js";

const initialState = {
  todo: [],
  posts: [],
};

function myReducer(state = initialState, action) {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.todos],
    };
  }
}

const store = createStore(myReducer);

store.subscribe(() => {
  console.log("state updated ");
  console.log(store.getState());
});

const todoAction = { type: "ADD_TODO", todo: "add milk" };

store.dispatch(todoAction);
