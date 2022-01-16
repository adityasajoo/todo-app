/*
    Set current user to local storage
*/
export const setLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

/**
    Get user from local storage
 */
export const getLocalStorage = () => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  return user ? user : null;
};

/*
    Remove user from local storage
*/
export const removeLocalStorage = () => {
  localStorage.removeItem("user");
};


/*
    Set current tasks to local storage
*/
export const setTasksLocalStorage = (task) => {
  console.log("---",task)
  localStorage.setItem("task", JSON.stringify(task));
};

/**
    Get tasks from local storage
 */
export const getTasksLocalStorage = () => {
  const taskString = localStorage.getItem("task");
  const task = JSON.parse(taskString);
  return task ? task : [];
};

/*
    Remove tasks from local storage
*/
export const removeTasksLocalStorage = () => {
  localStorage.removeItem("task");
};


/*
  Check if user is logging in for the first time. If yes, show him drag and drop info.
*/
export const isNewUser = () =>{
  const visitedStr = localStorage.getItem("visited")
  const visited = JSON.parse(visitedStr);
  if(!visited){
    localStorage.setItem("visited","true");
    return true;
  }
  return false;
}
