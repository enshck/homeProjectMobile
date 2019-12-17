import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";
import Routes from "./src/Routes";
import MainWrapper from "./src/components/mainWrapper";

const App = () => {
  return (
    <Provider store={store}>
      <MainWrapper>
        <Routes />
      </MainWrapper>
    </Provider>
  );
};

export default App;
