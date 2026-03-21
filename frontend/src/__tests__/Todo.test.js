import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import TodoList from "../components/TodoList";

jest.mock("axios");

describe("TodoList Component", () => {

  test("affiche la liste des todos depuis l'API", async () => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: true }
      ]
    });

    render(<TodoList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Todo 1")).toBeInTheDocument();
      expect(screen.getByText("Todo 2")).toBeInTheDocument();
    });
  });

  test("affiche un message si aucun todo", async () => {
    axios.get.mockResolvedValue({ data: [] });

    render(<TodoList />);

    await waitFor(() => {
      expect(screen.getByText(/no todos/i)).toBeInTheDocument();
    });
  });

  test("ajoute un nouveau todo", async () => {
    axios.get.mockResolvedValue({ data: [] });

    axios.post.mockResolvedValue({
      data: { id: 1, title: "New Todo", completed: false }
    });

    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("New Todo")).toBeInTheDocument();
    });
  });

  test("appel API correct", async () => {
    axios.get.mockResolvedValue({ data: [] });

    render(<TodoList />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("/api/todos");
    });
  });

});