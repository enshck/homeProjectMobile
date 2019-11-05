import React, { useEffect } from "react";
import styled from "styled-components";
import { View, ActivityIndicator, StatusBar } from "react-native";

import firebase from "../../utils/firebase";

const MainContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AuthLoadingScreen = ({
  navigation
}: {
  navigation: {
    navigate: (path: string, params?: any) => void;
  };
}) => {
  useEffect(() => {
    const user = firebase.auth().currentUser;
    console.log(user);
  }, []);

  // const authCheck = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user);
  //     if (user) {
  //       navigation.navigate("App");
  //     } else {
  //       navigation.navigate("Auth");
  //     }
  //   });
  // };

  return (
    <MainContainer>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </MainContainer>
  );
};

export default AuthLoadingScreen;
