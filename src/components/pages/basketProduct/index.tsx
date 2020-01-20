import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

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
  const [summaryOrderPrice, setSummaryOrderPrice] = useState<number>(0);
  const dispatch = useDispatch();

  const orders = useSelector<IOrdersReducers, IOrderElement[]>(
    state => state.orders
  );

  const profile = useSelector<IProfileReducers, IProfile>(
    state => state.profile
  );

  useEffect(() => {
    let sum: number = 0;
    orders.forEach(({ count, goodsData }: IOrderElement) => {
      sum = sum + +goodsData.price * count;
    });
    setSummaryOrderPrice(+sum.toFixed(2));
  }, [orders]);

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

  const submitHandlerOrder = async () => {
    const data = {
      orders,
      status: "ordered",
      date: moment().format("YYYY-MM-DD"),
      summaryOrder: summaryOrderPrice,
      userName: profile.displayName || profile.email || profile.phoneNumber
    };

    console.log(data, ">>>");

    // try {
    //   const response = await firebase
    //     .firestore()
    //     .collection("successOrders")
    //     .add(data);
    //   if (response.id) {
    //     await firebase
    //       .firestore()
    //       .collection("successOrders")
    //       .doc(response.id)
    //       .update({
    //         ...data,
    //         id: response.id
    //       });
    //     firebase
    //       .firestore()
    //       .collection("orders")
    //       .doc(profile.uid)
    //       .delete()
    //       .then(res => {
    //         dispatch(setOrders([]));
    //         // setOrderStatus(true);
    //       });
    //   }
    // } catch (err) {
    //   return;
    // }
  };

  return (
    <MainContainer>
      {isFetching ? (
        <ActivityIndicator />
      ) : (
        <BasketContainer
          updateOrderCountHandler={updateOrderCountHandler}
          deleteOrderHandler={deleteOrderHandler}
          summaryOrderPrice={summaryOrderPrice}
          submitHandlerOrder={submitHandlerOrder}
        />
      )}
    </MainContainer>
  );
};

export default BasketProduct;
