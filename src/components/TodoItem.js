import styled from "styled-components";
const TodoBox = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  border-radius: 1;

  box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.31);
`;
const TodoBoxLeft = styled.div`
  position: absolute;
  left: 20px;
  .material-symbols-outlined {
    color: green;
    font-size: 40px;
  }
`;

const TodoBoxText = styled.div`
  font-size: 25px;

  font-weight: bolder;
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
const TodoItem = ({ todo }) => {
  return (
    <TodoBox>
      <TodoBoxLeft>
        <span className="material-symbols-outlined">psychiatry</span>
      </TodoBoxLeft>
      <TodoBoxText>배고프기</TodoBoxText>
      <TodoBoxRight>
        <span className="material-symbols-outlined">do_not_disturb_on</span>
      </TodoBoxRight>
    </TodoBox>
  );
};

export default TodoItem;
