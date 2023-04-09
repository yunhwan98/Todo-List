import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import DateContainer from "../components/DateContainer";
import ImgContainer from "../components/ImgContainer";
import TodoList from "../components/ToDoList";

import { getStringDate } from "../components/DateContainer";
const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cbebd3;
  border: black solid 1px;
  flex: 1;
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
  const [curDate, setCurDate] = useState(new Date());
  // 날짜에 따른 todo 설정
  const [todayTodo, setTodayTodo] = useState([]);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const todoLength = todayTodo.length;
    if (todoLength >= 3) {
      setLevel(3);
    } else if (todoLength >= 1) {
      setLevel(2);
    } else {
      setLevel(1);
    }
  }, [todo, todayTodo]);

  const increaseDay = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + 1)
    );
  };
  const decreaseDay = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() - 1)
    );
  };

  useEffect(() => {
    setTodayTodo(
      todo.filter(
        (it) =>
          getStringDate(new Date(it.createDate)) === getStringDate(curDate)
      )
    );
  }, [curDate, todo]);

  return (
    <HomePage>
      <Header
        headText={"Growing ToDo"}
        leftChild={<Button text={"<"} decreaseDay={decreaseDay} />}
        rightChild={<Button text={">"} increaseDay={increaseDay} />}
      />
      <DateContainer date={curDate} />
      <ImgContainer level={level} />
      <InputContainer>
        <input
          value={text}
          placeholder={"TODO"}
          onChange={(e) => setText(e.target.value)}
        />
        <div
          onClick={() => {
            createTodo(text, curDate);
          }}
        >
          <span className="material-symbols-outlined">water_drop</span>
        </div>
      </InputContainer>
      <TodoList
        mode={true}
        todo={todayTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </HomePage>
  );
};

export default Home;
