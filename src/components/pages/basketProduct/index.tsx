import React, { useState, useEffect, useCallback } from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import BasketContainer from "./basketContainer";
import OrderSuccessScreen from "./orderSuccessScreen";
import {
  IOrderElement,
  IOrdersReducers,
  IProfile,
  IProfileReducers
} from "../../../utils/interfaces";
import firebase from "../../../utils/firebase";
import { getOrders } from "../../../utils/handlers";
import { setOrders } from "../../../store/actions";
import { debounce } from "../../../utils/handlers";

const MainContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${Dimensions.get("window").width};
`;

const BasketProduct = () => {
  const [isFetching, setFetching] = useState(true);
  const [isOrderSuccess, setOrderSuccess] = useState(false);
  const [summaryOrderPrice, setSummaryOrderPrice] = useState<number>(0);
  const [ordersData, setOrdersData] = useState<IOrderElement[]>([]);
  const updateOrderDebounceHandler = useCallback(debounce(1000), []);

  const dispatch = useDispatch();

  const orders = useSelector<IOrdersReducers, IOrderElement[]>(
    state => state.orders
  );

  const profile = useSelector<IProfileReducers, IProfile>(
    state => state.profile
  );

  useEffect(() => {
    setOrdersData(orders);
    setFetching(false);
  }, [orders]);

  useEffect(() => {
    let sum: number = 0;
    ordersData.forEach(({ count, goodsData }: IOrderElement) => {
      sum = sum + +goodsData.price * count;
    });
    setSummaryOrderPrice(+sum.toFixed(2));
  }, [ordersData]);

  const updateOrderCountHandler = (
    newCount: number | string,
    order: IOrderElement
  ) => {
    if (newCount > 0 && newCount < 1000) {
      const ordersClone = [...ordersData];
      ordersClone.forEach((elem, item) => {
        const { goodsData } = elem;
        if (goodsData.goodId === order.goodsData.goodId) {
          ordersClone[item].count = +newCount;
        }
      });
      setOrdersData(ordersClone);

      updateOrderDebounceHandler(() => {
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
          .catch(err => {
            console.log(err);
          });
      });
    } else {
      getOrders(
        profile.uid,
        orders => dispatch(setOrders(orders)),
        setFetching
      );
    }
  };

  const deleteOrderHandler = (order: IOrderElement) => {
    const newOrdersList = ordersData.filter(
      elem => elem.goodsData.goodId !== order.goodsData.goodId
    );

    setOrdersData(newOrdersList);
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

    try {
      const response = await firebase
        .firestore()
        .collection("successOrders")
        .add(data);

      if (response.id) {
        const result = await firebase
          .firestore()
          .collection("successOrders")
          .doc(response.id)
          .update({
            ...data,
            id: response.id
          });
        firebase
          .firestore()
          .collection("orders")
          .doc(profile.uid)
          .delete()
          .then(res => {
            dispatch(setOrders([]));
            setOrderSuccess(true);
            setTimeout(() => {
              setOrderSuccess(false);
            }, 1000);
          });
      }
    } catch (err) {
      return;
    }
  };

  return (
    <MainContainer>
      {isFetching ? (
        <ActivityIndicator />
      ) : isOrderSuccess ? (
        <OrderSuccessScreen />
      ) : (
        <BasketContainer
          updateOrderCountHandler={updateOrderCountHandler}
          deleteOrderHandler={deleteOrderHandler}
          summaryOrderPrice={summaryOrderPrice}
          submitHandlerOrder={submitHandlerOrder}
          ordersData={ordersData}
        />
      )}
    </MainContainer>
  );
};

export default BasketProduct;
