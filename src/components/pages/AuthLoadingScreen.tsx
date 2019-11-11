import React, { useEffect } from "react";
import styled from "styled-components";
import { View, ActivityIndicator, StatusBar } from "react-native";
import firebase from "react-native-firebase";

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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("App", {
          itemId: 86
        });
      } else {
        navigation.navigate("Auth");
      }
    });
  }, []);

  return (
    <MainContainer>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </MainContainer>
  );
};

export default AuthLoadingScreen;
