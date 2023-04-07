import { useNavigate } from "react-router-dom";
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

const TodoList = ({ todo, mode, removeTodo, updateTodo }) => {
  return mode ? (
    <Todolist>
      {todo.map((it) => (
        <TodoItem
          key={it.id}
          todo={it}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </Todolist>
  ) : (
    <Todolist>
      <TodoHead>
        <DateContainer mode={mode} />
        <ImgContainer mode={mode} />
      </TodoHead>
      {todo.map((it) => (
        <TodoItem
          key={it.id}
          todo={it}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </Todolist>
  );
};

export default TodoList;
