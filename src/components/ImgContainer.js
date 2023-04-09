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
    width: 350px;
    height: 350px;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #88c9b9;
    border-radius: 50%;
    width: 350px;
    height: 350px;
    object-fit: contain;
  }
`;

const ImgContainer = ({ todo, img_path, size }) => {
  const [level, setLevel] = useState(0);

  //todo 개수에 따라 level 설정
  useEffect(() => {
    const todoLength = todo.length;
    if (todoLength >= 3) {
      setLevel(3);
    } else if (todoLength >= 1) {
      setLevel(2);
    } else {
      setLevel(1);
    }
  }, [todo]);

  return (
    <ImgBox>
      <img src={process.env.PUBLIC_URL + `/assets/Img${level}.png`} />
    </ImgBox>
  );
};

export default ImgContainer;
