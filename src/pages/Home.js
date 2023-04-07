import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import DateContainer from "../components/DateContainer";
import ImgContainer from "../components/ImgContainer";
import TodoList from "../components/ToDoList";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cbebd3;
  border: black solid 1px;
  height: 100vh;
  position: relative;
`;

const InputContainer = styled.div`
  background-color: white;
  height: 80px;
  width: 500px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  position: relative;

  input {
    width: 80%;
    text-align: center;
    border: 0;
    font-size: 30px;
    font-weight: bolder;
  }
  div {
    position: absolute;

    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    span {
      color: skyblue;
      font-size: 40px;
      font-weight: bolder;
    }
  }
`;

const Home = ({ todo, createTodo, removeTodo, updateTodo }) => {
  const [text, setText] = useState("");

  return (
    <HomePage>
      <Header
        headText={"Growing ToDo"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DateContainer></DateContainer>
      <ImgContainer />
      <InputContainer>
        <input
          value={text}
          placeholder={"TODO"}
          onChange={(e) => setText(e.target.value)}
        />
        <div
          onClick={() => {
            console.log(text);
            createTodo(text);
          }}
        >
          <span className="material-symbols-outlined">water_drop</span>
        </div>
      </InputContainer>
      <TodoList
        mode={true}
        todo={todo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </HomePage>
  );
};

export default Home;
