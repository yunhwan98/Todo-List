import { useEffect, useState } from "react";
import styled from "styled-components";

import DateContainer from "./DateContainer";
import ImgContainer from "./ImgContainer";
import TodoItem from "./TodoItem";

const Todolist = styled.div`
  background-color: white;
  width: 95%;
  display: flex;
  flex-basis: 200px;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  > span {
    margin: auto 0;
    font-size: 2rem;
  }
`;

const TodoHead = styled.div`
  display: flex;

  width: 100%;
  align-items: center;
  justify-content: space-between;

  img {
    height: 100px;
    width: 100px;
  }
`;

const TodoList = ({ todo, mode, removeTodo, updateTodo, date }) => {
  const [todoLength, setTodolength] = useState(todo.length);
  const [level, setLevel] = useState(0);

  //todo 개수에 따라 level 설정
  useEffect(() => {
    const todoLength = todo.length;
    if (todoLength >= 3) {
      setLevel(3);
    } else if (todoLength >= 1) {
      setLevel(2);
    } else {
      setLevel(1);
    }
  }, [todo]);

  return mode ? (
    <Todolist>
      {todo.length === 0 ? (
        <span>Empty List...</span>
      ) : (
        todo.map((it) => (
          <TodoItem
            key={it.id}
            todo={it}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))
      )}
    </Todolist>
  ) : (
    <Todolist>
      <TodoHead>
        <DateContainer mode={mode} date={date} />
        <ImgContainer mode={mode} level={level} />
      </TodoHead>
      {todo.length === 0 ? (
        <span>Empty List...</span>
      ) : (
        todo.map((it) => (
          <TodoItem
            key={it.id}
            todo={it}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))
      )}
    </Todolist>
  );
};

export default TodoList;
