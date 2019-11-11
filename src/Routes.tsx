import React from "react";
import { useSelector } from "react-redux";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";
import styled from "styled-components";

import AuthScreen from "./components/pages/Auth";
import ItemsScreen from "./components/pages/Items";
import BasketScreen from "./components/pages/BasketProduct";
import AuthLoadingScreen from "./components/pages/AuthLoadingScreen";
import productIcon from "./img/product.png";
import basketIcon from "./img/basket.png";
import exit from "./img/exit.png";
import { signOutHandler } from "./utils/handlers";

const NavImage = styled(Image)`
  width: 25px;
  height: 25px;
`;

const getTabBarIcon = (navigation: any) => {
  const { routeName } = navigation.state;
  if (routeName === "Товары") {
    return <NavImage source={productIcon} />;
  } else if (routeName === "Корзина") {
    return <NavImage source={basketIcon} />;
  } else if (routeName === "Выход") {
    return <NavImage source={exit} />;
  }
};

const PrivateStack = createBottomTabNavigator(
  {
    // ...(false ? { Корзина: { screen: BasketScreen } } : {}),
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
        tabBarIcon: () => getTabBarIcon(navigation),
        tabBarOnPress: ({
          navigation,
          defaultHandler
        }: {
          navigation: any;
          defaultHandler: any;
        }) => {
          console.log(JSON.stringify(navigation.getParam("itemId", "NO-ID")));
          defaultHandler();
          // if (navigation.routeName !== "Корзина") {
          // }
        }
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

const MainNavigator = createSwitchNavigator(
  {
    Auth: PublicStack,
    App: PrivateStack,
    AuthLoading: AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoading"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
