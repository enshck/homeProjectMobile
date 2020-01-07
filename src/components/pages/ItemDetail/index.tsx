import React from "react";
import { withNavigation } from "react-navigation";

import { MainContainer, TextData } from "./styles";

interface IProps {
  // route: any;
  // navigation: any;
}

const ItemDetail = ({ route, navigation }: IProps) => {
  // console.log(navigation.state, "11>>>");
  const { params } = navigation.state;
  const { goodId, goodName, isSale, parametrs, pictureUrl, price } = params;
  const { color, internalMem, ram, sizeScreen, weight } = parametrs;

  return (
    <MainContainer>
      <TextData>Item Detail</TextData>
    </MainContainer>
  );
};

export default withNavigation(ItemDetail);
