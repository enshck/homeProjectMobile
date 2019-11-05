import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AuthScreen from "./components/pages/Auth";
import ItemsScreen from "./components/pages/Items";
import AuthLoadingScreen from "./components/pages/AuthLoadingScreen";
import firebase from "./utils/firebase";

const PrivateStack = createStackNavigator({
  Items: { screen: ItemsScreen }
});
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
