import React from "react";
import styled from "styled-components";
import { View, Text, Button } from "react-native";

import { signOutHandler } from "../../utils/handlers";

const MainContainer = styled(View)``;

const Items = () => {
  return (
    <MainContainer>
      <Text onPress={signOutHandler}>Выйти</Text>
    </MainContainer>
  );
};

Items.navigationOptions = ({ navigation }: { navigation: any }) => {
  const params = navigation.state.params || {};

  return {
    headerLeft: () => (
      <Button
        onPress={() => navigation.navigate("MyModal")}
        title="Info"
        // color={Platform.OS === 'ios' ? '#fff' : null}
      />
    )
  };
};

export default Items;
