import { useState, useEffect } from "react";
import styled from "styled-components";

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #88c9b9;
    border-radius: 50%;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #88c9b9;
    border-radius: 50%;
    //props.size에 따라 크기 변경
    width: ${(props) => (props.size === "large" ? "350px" : "100px")};
    height: ${(props) => (props.size === "large" ? "350px" : "100px")};
    object-fit: contain;
  }
`;

const ImgContainer = ({ todo, img_path, size }) => {
  const [level, setLevel] = useState(0);

  //todo 개수에 따라 level 설정
  useEffect(() => {
    const todoLength = todo.filter((it) => it.isComplete).length;
    if (todoLength >= 3) {
      setLevel(3);
    } else if (todoLength >= 1) {
      setLevel(2);
    } else {
      setLevel(1);
    }
  }, [todo]);

  return (
    <ImgBox size={size}>
      <img src={process.env.PUBLIC_URL + `/assets/Img${level}.png`} />
    </ImgBox>
  );
};

export default ImgContainer;
