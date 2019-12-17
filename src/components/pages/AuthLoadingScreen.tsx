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
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        firebase
          .firestore()
          .collection("successOrders")
          .get()
          .then(() => {
            navigation.navigate("ProtectedStack");
          })
          .catch(() => {
            navigation.navigate("PrivateStack");
          });
      } else {
        navigation.navigate("PublicStack");
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
