import styled from "styled-components";
const StyledTable = styled.table`
  table-layout: fixed;
  width: 40%;
  border-collapse: collapse;
  border: 1px solid #b5b5b5;
`;
const StyledtBodyTd = styled.td`
  text-align: left;
  border-collapse: collapse;
  border: solid 1px #000000;
`;
const StyledtBodyTh = styled.th`
  text-align: left;
`;
const StyledTable2 = styled.table`
  width: 70%;
  border-collapse: collapse;
  border: 2px solid #b5b5b5;
  margin: 20px;
`;

const StyledTable4 = styled.table`
  table-layout: fixed;
  width: 30%;
  border-collapse: collapse;
  border: 2px solid #b5b5b5;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;
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
  gender: string;
  surname: string;
  name: string;
  surnamerus: string;
  namerus: string;
  patronymicrus: string;
  dateOfBirth: string;
  address: string;
  passport: string;
  valid: string;
  citizenship: string;
  telephone: string;
  idTuris: string;
  price: string;
  topPay: string;
  ticketCommission: string;
};
export type Props = {
  data: DataItem;
};
const List = ({ data }: any) => {
  return (
    <>
      <h5>Ваш логин turin</h5>
      <StyledBox>
        <StyledTable>
          <tbody>
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
              <StyledtBodyTh>{data.id}</StyledtBodyTh>
            </tr>
            <tr>
              <td>Страна</td>
              <StyledtBodyTh>{data.country}</StyledtBodyTh>
            </tr>

            <tr>
              <td>Заезд</td>
              <StyledtBodyTh>
                {data.tourStartDate}-{data.tourEndDate}
              </StyledtBodyTh>
            </tr>
          </tbody>
        </StyledTable>
        <StyledTable4>
          <tbody>
            <tr>
              <td>Стоимость,BY:</td>
              <StyledtBodyTh>{data.price}</StyledtBodyTh>
            </tr>
            <tr>
              <td>К оплате,BY:</td>
              <StyledtBodyTh>{data.topPay}</StyledtBodyTh>
            </tr>
            <tr>
              <td>Комиссия по путевке:</td>
              <StyledtBodyTh>{data.ticketCommission}</StyledtBodyTh>
            </tr>
          </tbody>
        </StyledTable4>
      </StyledBox>
      <StyledTable2>
        <tbody>
          <tr>
            <StyledtBodyTd>Пол*</StyledtBodyTd>
            <StyledtBodyTd>{data.gender}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Фамлия*</StyledtBodyTd>
            <StyledtBodyTd>{data.surname}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Имя*</StyledtBodyTd>
            <StyledtBodyTd>{data.name}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Фамлия(на русском)*</StyledtBodyTd>
            <StyledtBodyTd>{data.surnamerus}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Имя(имя на русском)*</StyledtBodyTd>
            <StyledtBodyTd>{data.namerus}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Отчество (на русском)*</StyledtBodyTd>
            <StyledtBodyTd>{data.patronymicrus}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Дата рождения (dd.mm.yyyy)</StyledtBodyTd>
            <StyledtBodyTd>{data.dateOfBirth}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Адрес проживания</StyledtBodyTd>
            <StyledtBodyTd>{data.address}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Паспорт(серия/номер)</StyledtBodyTd>
            <StyledtBodyTd>{data.passport}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Действителен до(dd.mm.yyyy) </StyledtBodyTd>
            <StyledtBodyTd>{data.valid}</StyledtBodyTd>
          </tr>
          <StyledtBodyTd>Гражданство</StyledtBodyTd>
          <StyledtBodyTd>{data.citizenship}</StyledtBodyTd>
          <tr>
            <StyledtBodyTd>Телефон</StyledtBodyTd>
            <StyledtBodyTd>{data.telephone}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Личный номер*</StyledtBodyTd>
            <StyledtBodyTd>{data.idTuris}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Стоимость</StyledtBodyTd>
            <StyledtBodyTd>{data.price}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>К оплате</StyledtBodyTd>
            <StyledtBodyTd>{data.topPay}</StyledtBodyTd>
          </tr>
          <tr>
            <StyledtBodyTd>Комиссия по путевке</StyledtBodyTd>
            <StyledtBodyTd>{data.ticketCommission}</StyledtBodyTd>
          </tr>
        </tbody>
      </StyledTable2>
      {/* <span> Состав заказа:</span>
      <StyledTable3>
        <tbody>
          <tr>
            <StyledtBodyTh2>Дата</StyledtBodyTh2>
            <StyledtBodyTh2>День</StyledtBodyTh2>
            <StyledtBodyTh2>Прод.</StyledtBodyTh2>
            <StyledtBodyTh2>Услуги</StyledtBodyTh2>
            <StyledtBodyTh2>Кол-во человек</StyledtBodyTh2>
            <StyledtBodyTh2>Статус</StyledtBodyTh2>
          </tr>
        </tbody>
      </StyledTable3> */}
    </>
  );
};
export default List;
