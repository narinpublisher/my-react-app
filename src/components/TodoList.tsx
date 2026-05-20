// src/components/TodoList.tsx
import { useState } from "react";
import type { TodoItem } from "../types/types";

function TodoList() {
  const [inputText, setInputText] = useState<string>("");

  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: "Reactの基礎を学ぶ", completed: true },
    { id: 2, text: "TypeScriptを習得する", completed: false },
    { id: 3, text: "ポートフォリオを作成する", completed: false },
  ]);

  const handleAdd = () => {
    if (inputText.trim() === "") return;

    const newTodo: TodoItem = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const completedCount = todos.filter(
    t => t.completed
  ).length;

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "32px auto",
        padding: "0 16px",
      }}
    >
      <h1>ToDo リスト</h1>

      <p style={{ color: "#767676" }}>
        {completedCount} / {todos.length} 件完了
      </p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="新しいタスクを入力…"
          style={{
            flex: 1,
            padding: "8px",
          }}
        />

        <button onClick={handleAdd}>
          追加
        </button>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 0",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />

            <span
              style={{
                flex: 1,
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                color: todo.completed
                  ? "#767676"
                  : "#404040",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => handleDelete(todo.id)}
              style={{
                color: "#C0392B",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;