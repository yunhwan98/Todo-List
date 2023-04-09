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
`;

const TodoList = ({ todo, mode, removeTodo, updateTodo, date }) => {
  return mode ? (
    //Home화면에 보일 TodoList
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
    //ReadAll화면에 보일 TodoList
    <Todolist>
      <TodoHead>
        <DateContainer mode={mode} date={date} />
        {/* <ImgContainer mode={mode} level={level} /> */}
        <ImgContainer size={"small"} todo={todo} />
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
