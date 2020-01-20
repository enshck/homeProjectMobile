import React from "react";
import { TouchableHighlight } from "react-native";
import { useSelector } from "react-redux";

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
  SummaryPrice
} from "./styles";
import { IOrdersReducers, IOrderElement } from "../../../../utils/interfaces";
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
}

const BasketContainer = ({
  updateOrderCountHandler,
  deleteOrderHandler,
  summaryOrderPrice,
  submitHandlerOrder
}: IProps) => {
  const orders = useSelector<IOrdersReducers, IOrderElement[]>(
    state => state.orders
  );

  return (
    <MainContainer contentContainerStyle={{ alignItems: "center" }}>
      <SummaryOrder>
        <SumaryPriceText>
          Вместе: <SummaryPrice>{summaryOrderPrice}$</SummaryPrice>
        </SumaryPriceText>
        <SubmitButton onPress={submitHandlerOrder}>Оформить заказ</SubmitButton>
      </SummaryOrder>
      {orders.map(elem => {
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
                onChangeText={(text, name) =>
                  updateOrderCountHandler(text, elem)
                }
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
      })}
    </MainContainer>
  );
};

export default BasketContainer;
