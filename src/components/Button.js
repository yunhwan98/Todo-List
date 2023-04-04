import styled from "styled-components";

const CustomButton = styled.button`
  border: 0;
  background-color: transparent;
  font-weight: bolder;
  font-size: 20px;
`;

const Button = ({ img_path, text }) => {
  return <CustomButton>{text}</CustomButton>;
};

export default Button;
