import React, { useState } from "react";
import { Text } from "react-native";

import { MainContainer, MenuElement, List, MenuSlider } from "./styles";
import OrdersContainer from "./orders";
import AddGoodsScreen from "./addGoods";

const AdminPanel = () => {
  const [changedScreen, setChangedScreen] = useState("orders");

  return (
    <MainContainer>
      <List>
        <MenuElement onPress={() => setChangedScreen("orders")}>
          Заказы
        </MenuElement>
        <MenuElement onPress={() => setChangedScreen("addGoods")}>
          Добавление товаров
        </MenuElement>
        <MenuSlider mode={changedScreen} />
      </List>
      {changedScreen === "orders" ? <OrdersContainer /> : <AddGoodsScreen />}
    </MainContainer>
  );
};

export default AdminPanel;
