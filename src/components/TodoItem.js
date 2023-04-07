import { useState, useEffect } from "react";
import styled from "styled-components";

const TodoBox = styled.div`
  background-color: ${(props) => (props.isComplete ? "#f2f3f4" : "white")};

  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  border-radius: 1;
  margin-bottom: 5px;

  box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.31);
`;
const TodoBoxLeft = styled.div`
  position: absolute;
  left: 20px;

  .material-symbols-outlined {
    font-size: 40px;
    color: ${(props) => (props.isComplete ? "pink" : "green")};
  }
`;

const TodoBoxText = styled.div`
  font-size: 25px;

  font-weight: bolder;
  input {
    border: none;
    font-size: 25px;
  }
`;

const TodoBoxRight = styled.div`
  position: absolute;
  right: 20px;
  .material-symbols-outlined {
    color: red;
    font-size: 30px;
  }
`;

const RemoveBtn = styled;
const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [update, setUpdate] = useState(todo);

  //모드 변경 함수
  const modeHandler = () => {
    //글 수정 완료 시, 업데이트
    if (updateMode === true) {
      updateTodo(update);
    }
    setUpdateMode(!updateMode);
  };

  const completeHandler = () => {
    updateTodo({ ...update, isComplete: !update.isComplete });
    setUpdate({ ...update, isComplete: !update.isComplete });
  };

  return (
    <TodoBox isComplete={update.isComplete}>
      <TodoBoxLeft onClick={completeHandler} isComplete={update.isComplete}>
        {
          //실행여부 나타내기
          update.isComplete ? (
            <span className="material-symbols-outlined">local_florist</span>
          ) : (
            <span className="material-symbols-outlined">psychiatry</span>
          )
        }
      </TodoBoxLeft>
      <TodoBoxText onDoubleClick={modeHandler}>
        {updateMode ? (
          <input
            value={update.content}
            onChange={(e) => setUpdate({ ...update, content: e.target.value })}
          />
        ) : (
          update.content
        )}
      </TodoBoxText>

      <TodoBoxRight
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        <span className="material-symbols-outlined">do_not_disturb_on</span>
      </TodoBoxRight>
    </TodoBox>
  );
};

export default TodoItem;
