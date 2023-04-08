import styled from "styled-components";

export const getStringDate = (date) => {
  try {
    return date.toISOString().slice(0, 10);
  } catch {
    return date;
  }
};

const DateBox = styled.div`
  background-color: none;
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
  padding: 15px;
`;

const DateContainer = ({ date }) => {
  return <DateBox>{getStringDate(date)}</DateBox>;
};

export default DateContainer;
