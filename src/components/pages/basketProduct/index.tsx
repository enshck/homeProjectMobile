import React, { useState } from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import BasketContainer from "./basketContainer";
import {
  IOrderElement,
  IOrdersReducers,
  IProfile,
  IProfileReducers
} from "../../../utils/interfaces";
import firebase from "../../../utils/firebase";
import { getOrders } from "../../../utils/handlers";
import { setOrders } from "../../../store/actions";

const MainContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${Dimensions.get("window").width};
`;

const BasketProduct = () => {
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const orders = useSelector<IOrdersReducers, IOrderElement[]>(
    state => state.orders
  );

  const profile = useSelector<IProfileReducers, IProfile>(
    state => state.profile
  );

  const updateOrderCountHandler = (
    newCount: number | string,
    order: IOrderElement
  ) => {
    setFetching(true);
    if (newCount > 0 && newCount < 1000) {
      orders.forEach((elem, item) => {
        const { goodsData } = elem;
        if (goodsData.goodId === order.goodsData.goodId) {
          orders[item].count = +newCount;
        }
      });
      firebase
        .firestore()
        .collection("orders")
        .doc(profile.uid)
        .set({
          ordersData: orders
        })
        .then(result => {
          getOrders(
            profile.uid,
            orders => dispatch(setOrders(orders)),
            setFetching
          );
        })
        .catch(err => console.log(err));
    } else {
      getOrders(
        profile.uid,
        orders => dispatch(setOrders(orders)),
        setFetching
      );
    }
  };

  const deleteOrderHandler = (order: IOrderElement) => {
    setFetching(true);
    const newOrdersList = orders.filter(
      elem => elem.goodsData.goodId !== order.goodsData.goodId
    );
    firebase
      .firestore()
      .collection("orders")
      .doc(profile.uid)
      .set({
        ordersData: newOrdersList
      })
      .then(result => {
        getOrders(
          profile.uid,
          orders => dispatch(setOrders(orders)),
          setFetching
        );
      })
      .catch(err => console.log(err));
  };

  return (
    <MainContainer>
      {isFetching ? (
        <ActivityIndicator />
      ) : (
        <BasketContainer
          updateOrderCountHandler={updateOrderCountHandler}
          deleteOrderHandler={deleteOrderHandler}
        />
      )}
    </MainContainer>
  );
};

export default BasketProduct;
