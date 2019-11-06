import React, { Fragment } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import firebase from "react-native-firebase";

import { signOutHandler } from "../../utils/handlers";

const MainContainer = styled(View)``;

const Items = () => {
  return (
    <MainContainer>
      <Text onPress={signOutHandler}>Выйти</Text>
    </MainContainer>
  );
};

export default Items;
