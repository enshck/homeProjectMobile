import React, { useState } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

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

const BasketProduct = () => {
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const orders = useSelector<IOrdersReducers, IOrderElement[]>(
    state => state.orders
  );

  const profile = useSelector<IProfileReducers, IProfile>(
    state => state.profile
  );

  const updateOrderCountHandler = (newCount: number, order: IOrderElement) => {
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

  return (
    <View>
      <BasketContainer updateOrderCountHandler={updateOrderCountHandler} />
    </View>
  );
};

export default BasketProduct;
