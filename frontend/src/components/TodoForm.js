import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function TodoForm({ addTodo }) {

  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={submit}>

      <Stack direction="row" spacing={2}>

        <TextField
          fullWidth
          label="Ajouter nouvelle tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          type="submit"
        >
          Ajouter
        </Button>

      </Stack>

    </form>
  );
}

export default TodoForm;