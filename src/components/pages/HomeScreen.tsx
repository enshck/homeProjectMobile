import React, { Fragment } from "react";
import { Text, Button } from "react-native";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Fragment>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate("Profile")}
        title={"В профиль"}
      />
    </Fragment>
  );
};

export default HomeScreen;
