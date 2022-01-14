import React, { useState } from "react";
import SecondaryNav from "./SecondaryNav";
import { useStateValue } from "../../../Contexts/UserProvider";

import "./AddTodo.css";

const AddTodo = () => {
  const [branch, setBranch] = useState({todo:true,inProgress:false,done:false});
  const [taskName,setTaskName] = useState('');
  const [description,setDescription] = useState('');
  const [error,setError] = useState('');

  const obj = useStateValue();
  console.log(obj)
  

  const handleBranchChange = (selected) => {
        const b = {todo:false,inProgress:false,done:false}
        b[selected] = true;
        setBranch(b)
    }

    const handleCreate = () => {
        if(!taskName){
            return setError('Task Name is required');
        }

    }

  return (
    <>
      <SecondaryNav title="Create Task" />
      <div className="todo-form">
        <div>
          <p className="label">Enter Task Name</p>
          <input type="text" className="todo-input" placeholder="Task Name" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
        </div>
        <div>
          <p className="label">Enter Description</p>
          <textarea type="textarea" className="todo-textarea" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/> 
        </div>
        <div>
          <p className="label">Branch to</p>
          <div className="btnGroup">
            <button className={`todo-btn ${branch.todo ? "selected":""}`} onClick={() => handleBranchChange("todo")}>
              To-Do
            </button>
            <button className={`todo-btn ${branch.inProgress ? "selected":""}`} onClick={() => handleBranchChange("inProgress")}>In-Progress</button>
            <button className={`todo-btn ${branch.done ? "selected":""}`} onClick={() => handleBranchChange("done")}>Done</button>
          </div>
        </div>
        <div className="btns">
          <button className="cancel-btn">Cancel</button>
          <button  className="create-btn" onClick={() => console.log(branch)}>Create</button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
