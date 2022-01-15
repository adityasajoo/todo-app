import { getLocalStorage,getTasksLocalStorage } from "../utils/LocalStorageHelper";

export const initialState = {
  user: getLocalStorage(),
  taskList: getTasksLocalStorage(),
};

export const actionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
  SET_TASK: "SET_TASK",
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

    case actionTypes.SET_TASK:
      return {
        ...state,
        taskList: action.taskList,
      };
    default:
      return state;
  }
};

export default reducer;
