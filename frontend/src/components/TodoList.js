import React from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  IconButton
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function TodoList({ todos, removeTodo, toggleTodo }) {

  return (
    <List>

      {todos.map((todo) => (

        <ListItem
          key={todo.id}
          secondaryAction={
            <IconButton
              edge="end"
              color="error"
              onClick={() => removeTodo(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >

          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo)}
          />

          <ListItemText
            primary={todo.title}
            sx={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          />

        </ListItem>

      ))}

    </List>
  );
}

export default TodoList;