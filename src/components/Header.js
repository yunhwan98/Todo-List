import { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";

const CustomHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  position: relative;
`;
const HeadTop = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bolder;
  background-color: white;
`;
const HeadBtnLeft = styled.div``;

const HeadText = styled.div``;

const HeadBtnRight = styled.div``;

const Header = ({ headText, leftChild, rightChild }) => {
  const [menuOn, setMenuOn] = useState(false);
  const menuHandler = () => {
    setMenuOn(!menuOn);
  };

  return (
    <CustomHeader>
      <HeadTop>
        <HeadBtnLeft>{leftChild}</HeadBtnLeft>
        <HeadText onClick={menuHandler}>{headText}</HeadText>
        <HeadBtnRight>{rightChild}</HeadBtnRight>
      </HeadTop>
      {menuOn ? <Menu /> : <></>}
    </CustomHeader>
  );
};

export default Header;
