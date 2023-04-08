import styled from "styled-components";

const CustomButton = styled.button`
  border: 0;
  background-color: transparent;
  font-weight: bolder;
  font-size: 20px;
`;

const Button = ({ img_path, text, increaseDay = null, decreaseDay = null }) => {
  const dayHandler = () => {
    if (increaseDay) {
      increaseDay();
    } else if (decreaseDay) {
      decreaseDay();
    }
  };

  return <CustomButton onClick={dayHandler}>{text}</CustomButton>;
};

export default Button;
