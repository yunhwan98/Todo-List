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

const TodoList = ({ mode }) => {
  return mode ? (
    <Todolist>
      <TodoItem />
    </Todolist>
  ) : (
    <Todolist>
      <TodoHead>
        <DateContainer mode={mode} />
        <ImgContainer mode={mode} />
      </TodoHead>
      <TodoItem />
    </Todolist>
  );
};

export default TodoList;
