import styled from "styled-components";
import Button from "../components/Button";
import { getStringDate } from "../components/DateContainer";
import Header from "../components/Header";
import TodoList from "../components/ToDoList";

const ReadAllPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cbebd3;
  border: black solid 1px;
`;

const ReadAll = ({ todo, removeTodo, updateTodo }) => {
  //날짜별 목록 생성
  const date_list = [
    ...new Set(todo.map((it) => getStringDate(new Date(it.createDate)))),
  ];

  return (
    <>
      <ReadAllPage>
        <Header
          headText={"All ToDo"}
          leftChild={<Button text={"<"} />}
          rightChild={<Button text={">"} />}
        />
        {date_list.map((it, idx) => {
          const groupTodo = todo.filter((data) => {
            return getStringDate(new Date(data.createDate)) === it;
          });

          return (
            <TodoList
              key={idx}
              todo={groupTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              date={it}
            />
          );
        })}
      </ReadAllPage>
    </>
  );
};

export default ReadAll;
