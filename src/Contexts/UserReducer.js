import { getLocalStorage } from "../utils/helper";

export const initialState = {
  user: getLocalStorage(),
  todoList: [
    { id: 1, name: "Walk", description: "Go for a walk", branch: "todo" },
    { id: 2, name: "Dance", description: "Dance in the Hall", branch: "todo" },
    { id: 3, name: "Sleep", description: "", branch: "todo" },
    { id: 4, name: "Sleep", description: "", branch: "progress" },
  ],
};

export const actionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
  SET_TODO : "SET_TODO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: null,
      };

    case actionTypes.SET_TODO:
        return {
            ...state,
            todoList : action.todoList
        }
    default:
      return state;
  }
};

export default reducer;
