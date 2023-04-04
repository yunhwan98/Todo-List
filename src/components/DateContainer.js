import styled from "styled-components";

export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DateBox = styled.div`
  background-color: none;
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
  padding: 15px;
`;

const DateContainer = () => {
  return <DateBox>{getStringDate(new Date())}</DateBox>;
};

export default DateContainer;
