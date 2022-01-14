import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import './Todo.css';

const Todo = ({todo}) => {
  return (
    <Card sx={{ width: 300, minHeight:150 ,marginTop:2, padding:0 }}>
      <CardContent sx={{ paddingLeft: 2, paddingTop: 0}}>
        <h3 className="card-name">{todo.name}</h3>
        <p className="card-description">{todo.description}</p>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default Todo;
