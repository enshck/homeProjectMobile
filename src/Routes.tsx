import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AuthScreen from "./components/pages/Auth";
import SignUpScreen from "./components/pages/SignUp";

const MainNavigator = createStackNavigator({
  Auth: { screen: AuthScreen },
  SignUp: { screen: SignUpScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
