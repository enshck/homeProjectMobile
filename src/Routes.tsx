import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Image, Text, View, TouchableHighlight } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

import AuthScreen from "./components/pages/Auth";
import ItemsScreen from "./components/pages/Items";
import BasketScreen from "./components/pages/basketProduct";
import AuthLoadingScreen from "./components/pages/AuthLoadingScreen";
import AdminScreen from "./components/pages/adminPanel";
import ItemDetail from "./components/pages/ItemDetail";
import productIcon from "./img/product.png";
import basketIcon from "./img/basket.png";
import exit from "./img/exit.png";
import arrowLeft from "./img/arrowLeft.png";
import { signOutHandler } from "./utils/handlers";

const NavImage = styled(Image)`
  width: 25px;
  height: 25px;
`;

const ArrowLeftPicture = styled(Image)`
  height: 32px;
  width: 28px;
  margin-left: 10px;
`;

const CountOrdersContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24;
  height: 24;
  border-radius: 24;
  background: rgb(251, 63, 76);
  position: absolute;
  right: -15px;
  top: -15px;
`;

const CountOrdersText = styled(Text)`
  color: #fff;
`;

const BasketMainContainer = styled(View)`
  position: relative;
`;

const CountOrdersMainContainer = connect(state => ({
  value: state.orders.length
}))(({ value }) => (
  <CountOrdersContainer>
    <CountOrdersText>{value}</CountOrdersText>
  </CountOrdersContainer>
));

const getTabBarIcon = (navigation: any) => {
  const { routeName } = navigation.state;
  if (routeName === "Товары") {
    return <NavImage source={productIcon} />;
  } else if (routeName === "Корзина") {
    return (
      <BasketMainContainer>
        <NavImage source={basketIcon} />
        <CountOrdersMainContainer />
      </BasketMainContainer>
    );
  } else if (routeName === "Выход") {
    return <NavImage source={exit} />;
  }
};

const PrivateStack = createBottomTabNavigator(
  {
    Товары: { screen: ItemsScreen },
    Корзина: { screen: BasketScreen },
    Выход: () => {
      signOutHandler();
      return null;
    }
  },
  {
    defaultNavigationOptions: ({ navigation }: { navigation: any }) => {
      return {
        tabBarIcon: () => getTabBarIcon(navigation)
      };
    },
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);
const ProtectedStack = createBottomTabNavigator(
  {
    Товары: { screen: ItemsScreen },
    Админ: { screen: AdminScreen },
    Корзина: { screen: BasketScreen },
    Выход: () => {
      signOutHandler();
      return null;
    }
  },
  {
    defaultNavigationOptions: ({ navigation }: { navigation: any }) => {
      return {
        tabBarIcon: () => getTabBarIcon(navigation)
      };
    },
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);
const PublicStack = createStackNavigator({
  Auth: { screen: AuthScreen }
});

const DetailsItemStack = createStackNavigator({
  DetailsItem: {
    screen: ItemDetail,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <TouchableHighlight onPress={() => navigation.navigate("Товары")}>
          <ArrowLeftPicture source={arrowLeft} />
        </TouchableHighlight>
      ),
      title: navigation.state.params.goodName,
      headerTitleStyle: {
        width: "70%",
        textAlign: "center",
        overflow: "hidden"
      }
    })
  }
});

const MainNavigator = createSwitchNavigator(
  {
    PublicStack,
    PrivateStack,
    ProtectedStack,
    DetailsItemStack,
    AuthLoading: AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoading"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
