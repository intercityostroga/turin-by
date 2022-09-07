import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWindowLogIn = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
`;

const StyledWindowTitle = styled.p`
  display: inline;
  border-bottom: 2px solid #575b62;
  font-size: 12px;
  line-height: 32.68px;
  font-weight: bold;
  padding: 5px 5px 5px 0;
  border-spacing: 2px;
  border-collapse: separate;
`;

const ModalWindowBtn = styled.button``;

const ModalWindowPassword = styled.input`
  width: 200px;
  height: 19px;
  padding: 1px 2px;
  border-spacing: 2px;
  font-size: 18px;
  border: 2px solid #b5b5b5;
  line-height: normal;
  cursor: text;
`;

export const LogIn = () => {
  return (
    <>
      <StyledWindowLogIn>
        <table>
          <StyledWindowTitle>Вход в систему бронирования</StyledWindowTitle>
          <tr>
            <td>
              <span>Имя пользователя :</span>
            </td>
            <td>
              <ModalWindowPassword type="text"></ModalWindowPassword>
            </td>
          </tr>
          <tr>
            <td>
              <span>Пароль :</span>
            </td>
            <td>
              <ModalWindowPassword type="password"></ModalWindowPassword>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <Link to={`/listOrders`}>
                <ModalWindowBtn> Войти</ModalWindowBtn>
              </Link>
            </th>
          </tr>
        </table>
      </StyledWindowLogIn>
    </>
  );
};
export default LogIn;
