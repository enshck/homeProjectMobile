import React from "react";
import { Text } from "react-native";

import { MainContainer, TableBody, Row, Column, TitleText } from "./styles";
import { ISuccessOrders } from "../../../../utils/interfaces";
import { StatusContainer } from "../../../../constants/styles";
import { orderStatus } from "../../../../constants";

interface IProps {
  sortedList: ISuccessOrders[];
}

const OrdersContainer = ({ sortedList }: IProps) => {
  return (
    <MainContainer contentContainerStyle={{ alignItems: "center" }}>
      <TableBody>
        {sortedList.map((elem: ISuccessOrders, index: number) => {
          const { status, summaryOrder, userName, id } = elem;
          return (
            <Row key={index}>
              <Column>
                <TitleText>Сумма:</TitleText>
                <Text>{summaryOrder} $</Text>
              </Column>
              <Column>
                <TitleText>Заказчик:</TitleText>
                <Text>{userName}</Text>
              </Column>
              <Column>
                <TitleText>Статус:</TitleText>
                <StatusContainer typeContainer={status}>
                  <Text>{orderStatus[status]}</Text>
                </StatusContainer>
              </Column>
            </Row>
          );
        })}
      </TableBody>
    </MainContainer>
  );
};

export default OrdersContainer;
