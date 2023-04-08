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

const ImgContainer = ({ img_path, size, level }) => {
  return (
    <ImgBox>
      <img src={process.env.PUBLIC_URL + `/assets/Img${level}.png`} />
    </ImgBox>
  );
};

export default ImgContainer;
