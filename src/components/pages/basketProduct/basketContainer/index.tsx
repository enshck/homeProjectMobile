import React from "react";
import { TouchableHighlight } from "react-native";

import {
  MainContainer,
  OrderElement,
  ItemPicture,
  Name,
  Price,
  CountControlContainer,
  ControlButtons,
  ControlInput,
  DeleteOrderButtom,
  DeletePicture,
  SummaryOrder,
  SubmitButton,
  SumaryPriceText,
  SummaryPrice,
  MainBasketContainer,
  NoOrdersMessage
} from "./styles";
import { IOrderElement } from "../../../../utils/interfaces";
import plus from "../../../../img/plusOrder.png";
import minus from "../../../../img/minusOrder.png";
import Input from "../../../../components/inputs/input";

interface IProps {
  updateOrderCountHandler: (
    newCount: number | string,
    order: IOrderElement
  ) => void;
  deleteOrderHandler: (order: IOrderElement) => void;
  summaryOrderPrice: number;
  submitHandlerOrder: () => void;
  ordersData: IOrderElement[];
}

const BasketContainer = ({
  updateOrderCountHandler,
  deleteOrderHandler,
  summaryOrderPrice,
  submitHandlerOrder,
  ordersData
}: IProps) => {
  return (
    <MainBasketContainer>
      {ordersData.length > 0 && (
        <SummaryOrder>
          <SumaryPriceText>
            Вместе: <SummaryPrice>{summaryOrderPrice}$</SummaryPrice>
          </SumaryPriceText>
          <SubmitButton onPress={submitHandlerOrder}>
            Оформить заказ
          </SubmitButton>
        </SummaryOrder>
      )}
      <MainContainer contentContainerStyle={{ alignItems: "center" }}>
        {ordersData.length < 1 ? (
          <NoOrdersMessage>Ваша корзина пуста.</NoOrdersMessage>
        ) : (
          ordersData.map(elem => {
            const { goodsData, count } = elem;
            const { goodName, goodId, pictureUrl, price } = goodsData;

            return (
              <OrderElement key={goodId}>
                <DeleteOrderButtom onPress={() => deleteOrderHandler(elem)}>
                  <DeletePicture source={plus} />
                </DeleteOrderButtom>
                <ItemPicture
                  source={{
                    uri: pictureUrl
                  }}
                  resizeMode={"contain"}
                />
                <Name>{goodName}</Name>
                <Price>${price}</Price>
                <CountControlContainer>
                  <TouchableHighlight
                    onPress={() => updateOrderCountHandler(count - 1, elem)}
                  >
                    <ControlButtons source={minus} />
                  </TouchableHighlight>

                  <Input
                    StyledComponent={ControlInput}
                    onChangeText={(text, name) => {
                      updateOrderCountHandler(text, elem);
                    }}
                    defaultValue={count + ""}
                    name="orderCount"
                    keyboardType="numeric"
                  />
                  <TouchableHighlight
                    onPress={() => updateOrderCountHandler(count + 1, elem)}
                  >
                    <ControlButtons source={plus} />
                  </TouchableHighlight>
                </CountControlContainer>
              </OrderElement>
            );
          })
        )}
      </MainContainer>
    </MainBasketContainer>
  );
};

export default BasketContainer;
