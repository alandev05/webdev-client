"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
import type { Todo } from "./client";
const errorText = (error: unknown) =>
  axios.isAxiosError(error)
    ? (error.response?.data?.message ?? error.message)
    : String(error);
export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setTodos(await client.fetchTodos());
      } catch (error) {
        setErrorMessage(errorText(error));
      }
    };
    fetchTodos();
  }, []);
  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(errorText(error));
    }
  };
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: Todo) => {
    try {
      // "editing" is UI-only state; do not send it to the server
      const { editing: _editing, ...toSave } = todo;
      void _editing;
      await client.updateTodo(toSave);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(errorText(error));
    }
  };
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p
          id="wd-todo-error-message"
          className="rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}
      <h4 className="flex items-center gap-3">
        Todos
        <FaPlusCircle
          onClick={createNewTodo}
          id="wd-create-todo"
          title="Create todo (GET)"
          className="cursor-pointer text-2xl text-green-600"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          id="wd-post-todo"
          title="Post todo (POST)"
          className="cursor-pointer text-2xl text-blue-600"
        />
      </h4>
      <ul id="wd-todos" className="max-w-md divide-y rounded border border-neutral-300">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
            />
            {!todo.editing ? (
              <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
                {todo.title}
              </span>
            ) : (
              <input
                className="flex-1 rounded border border-neutral-300 px-2 py-0.5"
                defaultValue={todo.title}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({
                      ...todo,
                      title: e.currentTarget.value,
                      editing: false,
                    });
                  }
                }}
              />
            )}
            <FaPencilAlt
              onClick={() => editTodo(todo)}
              className="cursor-pointer text-blue-600"
              title="Edit (PUT)"
            />
            <FaTrash
              onClick={() => removeTodo(todo)}
              id="wd-remove-todo"
              title="Remove (GET /delete)"
              className="cursor-pointer text-red-600"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              id="wd-delete-todo"
              title="Delete (HTTP DELETE)"
              className="cursor-pointer text-2xl text-red-600"
            />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
