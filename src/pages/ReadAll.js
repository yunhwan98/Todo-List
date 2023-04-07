import styled from "styled-components";
import Button from "../components/Button";
import Header from "../components/Header";
import TodoList from "../components/ToDoList";

const ReadAllPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cbebd3;
  border: black solid 1px;
  height: 100vh;
`;

const ReadAll = ({ todo, removeTodo, updateTodo }) => {
  return (
    <>
      <ReadAllPage>
        <Header
          headText={"All ToDo"}
          leftChild={<Button text={"<"} />}
          rightChild={<Button text={">"} />}
        />
        <TodoList
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        ></TodoList>
      </ReadAllPage>
    </>
  );
};

export default ReadAll;
