import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Home from "./pages/Home";
import ReadAll from "./pages/ReadAll";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    //todo의 정보 받아오기
    getTodo();
  }, []);

  const getTodo = async () => {
    await fetch("http://localhost:3001/todo")
      .then((data) => data.json())
      .then((res) => {
        console.log(todo);

        setTodo(res);
      });
  };

  //Todo 생성
  const createTodo = async (text, date) => {
    const newTodo = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      content: text,
      isComplete: false,
      createDate: date,
    };
    await fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    setTodo([...todo, newTodo]);
  };

  //Todo 제거
  const removeTodo = async (idx) => {
    await fetch(`http://localhost:3001/todo/${idx}`, {
      method: "DELETE",
    });

    const filtered = todo.filter((it) => it.id !== idx);
    setTodo(filtered);
  };

  //Todo 수정
  const updateTodo = async (update) => {
    await fetch(`http://localhost:3001/todo/${update.id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...update,
      }),
    });
    const updated = todo.map((it) => (it.id === update.id ? update : it));
    setTodo(updated);
  };

  return (
    //경로 설정
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                todo={todo}
                createTodo={createTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            }
          ></Route>
          <Route
            path="/readall"
            element={
              <ReadAll
                todo={todo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
