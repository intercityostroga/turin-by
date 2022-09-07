import { data } from "../data";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledTable = styled.table`
  max-width: 100%;
  border-collapse: collapse;
  border: 3px solid black;
  margin: 15px;
`;
const StyledtBodyTd = styled.td`
  text-align: center;
  border-collapse: collapse;
  border: solid 1px #000000;
  font-size: 11px;
`;
const StyledtBodyTh = styled.th`
  text-align: center;
  border-collapse: collapse;
  border: solid 1px #000000;
  font-size: 15px;
`;
// const StyledtLink = styled.link`
//   color: black;
// `;

export type DataItem = {
  id: string;
  fullName: string;
  numberOfPersons: string;
  tourStartDate: string;
  tourEndDate: string;
  country: string;
  hotel: string;
  status: string;
  oplata: string;
  paymentInNational: string;
  paid: string;
  dateOfTheOrder: string;
  documentStatus: string;
};
export type Props = {
  data: DataItem;
};

function ListOrders() {
  const rows = data.map(function (item) {
    return (
      <tr>
        <StyledtBodyTd>
          <Link to={`/OrderInfo/${item.id}`} state={item}>
            <td>{item.id}</td>
          </Link>
        </StyledtBodyTd>
        <StyledtBodyTd>{item.fullName}</StyledtBodyTd>
        <StyledtBodyTd>{item.numberOfPersons}</StyledtBodyTd>
        <StyledtBodyTd>{item.tourStartDate}</StyledtBodyTd>
        <StyledtBodyTd>{item.tourEndDate}</StyledtBodyTd>
        <StyledtBodyTd>{item.country}</StyledtBodyTd>
        <StyledtBodyTd>{item.hotel}</StyledtBodyTd>
        <StyledtBodyTd>{item.status}</StyledtBodyTd>
        <StyledtBodyTd>{item.oplata}</StyledtBodyTd>
        <StyledtBodyTd>{item.paymentInNational}</StyledtBodyTd>
        <StyledtBodyTd>{item.paid}</StyledtBodyTd>
        <StyledtBodyTd>{item.dateOfTheOrder}</StyledtBodyTd>
        <StyledtBodyTd>{item.documentStatus}</StyledtBodyTd>
      </tr>
    );
  });
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledtBodyTh>Номер заказа</StyledtBodyTh>
          <StyledtBodyTh>ФИО</StyledtBodyTh>
          <StyledtBodyTh>Кол-во человек</StyledtBodyTh>
          <StyledtBodyTh>Дата начала тура</StyledtBodyTh>
          <StyledtBodyTh>Дата окончания тура</StyledtBodyTh>
          <StyledtBodyTh>Страна</StyledtBodyTh>
          <StyledtBodyTh>Отель</StyledtBodyTh>
          <StyledtBodyTh>Статус заказа</StyledtBodyTh>
          <StyledtBodyTh>К оплате </StyledtBodyTh>
          <StyledtBodyTh>К оплате нац.вал.</StyledtBodyTh>
          <StyledtBodyTh>Оплачено</StyledtBodyTh>
          <StyledtBodyTh>Дата оформления заказа</StyledtBodyTh>
          <StyledtBodyTh>Статус документов на визу</StyledtBodyTh>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </StyledTable>
  );
}
export default ListOrders;
