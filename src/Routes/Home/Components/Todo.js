import { Card, CardContent, useMediaQuery } from "@mui/material";
import React from "react";
import "./Todo.css";

const Todo = ({ todo, onDragStart }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Card
      draggable
      sx={{
        width: matches ? 300 : 275,
        minHeight: 100,
        marginTop: 2,
        padding: 0,
        cursor: "grab",
      }}
      onDragStart={(e) => {
        onDragStart(e, todo.id);
      }}
    >
      <CardContent
        sx={{ paddingLeft: 2, paddingTop: 0, paddingBottom: 0 }}
        display={{ sd: {} }}
        onClick={() => console.log(`Clicked ${todo.id}`)}
      >
        <h3 className="card-name">{todo.name}</h3>
        <p className="card-description">{todo.description}</p>
        
      </CardContent>
    </Card>
  );
};

export default Todo;
