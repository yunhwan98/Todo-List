import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Menubox = styled.div`
  background-color: #f2f0f0;
  width: 100%;
  position: absolute;
  top: 50px;
`;

const MenuItem = styled.div`
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const Menu = ({ menu_list = ["Home", "ReadAll"] }) => {
  const navigate = useNavigate();

  //클릭 시 페이지 이동
  const pageHandler = (e) => {
    const page = e.target.textContent;

    if (page === "Home") {
      navigate("/");
    } else if (page === "ReadAll") {
      navigate("/readall");
    }
  };

  return (
    <Menubox>
      {menu_list.map((it, idx) => (
        <MenuItem key={idx}>
          <div onClick={pageHandler}>{it}</div>
        </MenuItem>
      ))}
    </Menubox>
  );
};

export default Menu;
