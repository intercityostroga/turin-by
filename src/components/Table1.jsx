import styled from "styled-components";
import { data } from "../data";
const StyledtBodyTh = styled.th`
  text-align: left;
`;
function Table1() {
  const rows = data.map(function (item) {
    return (
      <tr key={item.id}>
        <StyledtBodyTh>{item.id}</StyledtBodyTh>
        <StyledtBodyTh>{item.country}</StyledtBodyTh>
        <StyledtBodyTh>{item.country}</StyledtBodyTh>
        <StyledtBodyTh>
          {item.tourStartDate}-{item.tourEndDate}
        </StyledtBodyTh>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <td>Агент</td>
          <StyledtBodyTh>Острога Алексей Сергеевич</StyledtBodyTh>
        </tr>
        <tr>
          <td>Номер договора</td>
        </tr>
        <tr>
          <td>Агентская комиссия</td>
          <StyledtBodyTh>6%</StyledtBodyTh>
        </tr>
        <tr>
          <td>Номер заказа</td>
        </tr>
        <tr>
          <td>Страна</td>
        </tr>
        <tr>
          <td>Тур</td>
        </tr>
        <tr>
          <td>Заезд</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default Table1;
