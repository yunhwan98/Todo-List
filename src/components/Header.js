import styled from "styled-components";

const CustomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  font-size: 30px;
  font-weight: bolder;
  background-color: white;
`;

const HeadBtnLeft = styled.div``;

const HeadText = styled.div``;

const HeadBtnRight = styled.div``;

const Header = ({ headText, leftChild, rightChild }) => {
  return (
    <CustomHeader>
      <HeadBtnLeft>{leftChild}</HeadBtnLeft>
      <HeadText>{headText}</HeadText>
      <HeadBtnRight>{rightChild}</HeadBtnRight>
    </CustomHeader>
  );
};

export default Header;
