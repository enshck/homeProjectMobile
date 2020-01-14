import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import {
  MainContainer,
  OrderElement,
  ItemPicture,
  Name,
  Price,
  CountControlContainer,
  ControlButtons,
  ControlInput
} from "./styles";
import { IOrdersReducers, IOrderElement } from "../../../../utils/interfaces";
import plus from "../../../../img/plusOrder.png";
import minus from "../../../../img/minusOrder.png";
import Input from "../../../../components/inputs/input";

const BasketContainer = () => {
  const orders = useSelector<IOrdersReducers, IOrderElement[]>(
    state => state.orders
  );

  console.log(orders, ">>>");

  return (
    <MainContainer contentContainerStyle={{ alignItems: "center" }}>
      {orders.map(elem => {
        const { goodsData, count } = elem;
        const {
          goodName,
          isSale,
          goodId,
          parametrs,
          pictureUrl,
          price,
          id
        } = goodsData;
        const { color, internalMem, ram, sizeScreen, weight } = parametrs;

        const updateOrderCountHandler = () => {};

        return (
          <OrderElement key={goodId}>
            <ItemPicture
              source={{
                uri: pictureUrl
              }}
              resizeMode={"contain"}
            />
            <Name>{goodName}</Name>
            <Price>${price}</Price>
            <CountControlContainer>
              <ControlButtons
                source={minus}
                //   onClick={() =>
                //     updateOrderCountHandler(count - 1, elem)
                //   }
              />
              {/* <Input
                StyledComponent={ControlInput}
                onInput={updateOrderCountHandler}
                defaultValue={count}
                name="orderCount"
                type="text"
                // errors={loginData.errors}
              /> */}
              {/* <ControlInput
                          warning={count < 1 || count > 999}
                          defaultValue={count}
                          onBlur={e =>
                            updateOrderCountHandler(+e.target.value, elem)
                          }
                        /> */}
              <ControlButtons
                source={plus}
                //   onClick={() =>
                //     updateOrderCountHandler(count + 1, elem)
                //   }
              />
            </CountControlContainer>
          </OrderElement>
        );
      })}
    </MainContainer>
  );
};

export default BasketContainer;