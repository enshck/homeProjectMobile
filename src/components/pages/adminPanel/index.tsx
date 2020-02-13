import React, { useState, useEffect, useCallback } from "react";
import { Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { MainContainer, MenuElement, List, MenuSlider } from "./styles";
import OrdersContainer from "./orders";
import AddGoodsScreen from "./addGoods";
import {
  ISuccessOrders,
  IAdminOrdersReducers
} from "../../../utils/interfaces";
import { useGetFirebaseData } from "../../../customHooks/useGetFirebaseData";
import { setGoodsList } from "../../../store/actions";
import firebase from "../../../utils/firebase";

const AdminPanel = () => {
  const [changedScreen, setChangedScreen] = useState("orders");
  const [sortedList, setSortedList] = useState<ISuccessOrders[]>([]);
  const [getSuccessOrdersData, sucessOrdersData] = useGetFirebaseData();
  const { Value, timing } = Animated;
  const leftPosition = useCallback(new Value(0), []);
  const menuSliderWidth = useCallback(
    leftPosition.interpolate({
      inputRange: [0, 140],
      outputRange: [50, 120]
    }),
    [leftPosition]
  );
  const adminOrders = useSelector<IAdminOrdersReducers, ISuccessOrders[]>(
    state => state.adminOrders
  );

  const dispatch = useDispatch();

  // if (!sucessOrdersData.called) {
  //   getSuccessOrdersData({
  //     collection: "successOrders",
  //     actionHandler: orders => dispatch(setGoodsList(orders))
  //   });
  // }

  const leftPositionHandler = (value: number) => {
    timing(leftPosition, {
      toValue: value,
      duration: 400
    }).start();
  };

  useEffect(() => {
    if (changedScreen === "orders") {
      leftPositionHandler(0);
    } else {
      leftPositionHandler(160);
    }
  }, [changedScreen]);

  useEffect(() => {
    const sortPattern = ["ordered", "paidFor", "cancelled", "delivered"];
    const newAdminOrdersList: ISuccessOrders[] = [];
    sortPattern.forEach(elem => {
      adminOrders.forEach(order => {
        if (order.status === elem) {
          newAdminOrdersList.push(order);
        }
      });
    });
    setSortedList(newAdminOrdersList);
  }, [adminOrders]);

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("successOrders")
  //     .get()
  //     .then(res => console.log(res, "res"))
  //     .catch(err => console.log(err, "err"));

  //   // .catch(() => {
  //   //   navigation.navigate("PrivateStack");
  //   // });

  //   // firebase
  //   //   .firestore()
  //   //   .collection("successOrders")
  //   //   .get()
  //   //   .then(res => console.log(res))
  //   //   .catch(err => console.log(err, "err"));

  //   // if (!doc.empty) {
  //   //   const docData = await doc.docs.map(item => item.data());
  // }, []);

  return (
    <MainContainer>
      <List>
        <MenuElement onPress={() => setChangedScreen("orders")}>
          Заказы
        </MenuElement>
        <MenuElement onPress={() => setChangedScreen("addGoods")}>
          Добавление товаров
        </MenuElement>
        <MenuSlider style={{ left: leftPosition, width: menuSliderWidth }} />
      </List>
      {changedScreen === "orders" ? (
        <OrdersContainer sortedList={sortedList} />
      ) : (
        <AddGoodsScreen />
      )}
    </MainContainer>
  );
};

export default AdminPanel;
