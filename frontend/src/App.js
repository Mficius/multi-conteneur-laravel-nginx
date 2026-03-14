import React, { useState, useEffect } from "react";
import { Container, Card, CardContent } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Stats from "./components/Stats";

import { lightTheme, darkTheme } from "./theme";

import { getTodos, createTodo, deleteTodo } from "./api";

function App() {

  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (title) => {
    await createTodo({ title });
    loadTodos();
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const toggleTodo = (todo) => {
    setTodos(
      todos.map(t =>
        t.id === todo.id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

      <Header toggleTheme={() => setDarkMode(!darkMode)} />

      <Container maxWidth="sm" sx={{ marginTop: 4 }}>

        <Card>
          <CardContent>

            <Stats todos={todos} />

            <TodoForm addTodo={addTodo} />

            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />

          </CardContent>
        </Card>

      </Container>

    </ThemeProvider>
  );
}

export default App;