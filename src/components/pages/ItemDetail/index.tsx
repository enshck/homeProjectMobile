import React from "react";
import { withNavigation } from "react-navigation";

import {
  MainContainer,
  ItemPicture,
  Price,
  SaleContainer,
  FeaturesContainer,
  FeatureItem,
  FeaturesTitle,
  ButtonBuyContainer
} from "./styles";
import { ButtonBuy } from "../../../constants/styles";

interface IProps {
  // route: any;
  // navigation: any;
}

const ItemDetail = ({ route, navigation }: IProps) => {
  const { params } = navigation.state;
  const { goodId, goodName, isSale, parametrs, pictureUrl, price } = params;
  const { color, internalMem, ram, sizeScreen, weight } = parametrs;

  return (
    <MainContainer>
      <ItemPicture
        source={{
          uri: pictureUrl
        }}
        resizeMode={"contain"}
      />

      {isSale && <SaleContainer>Sale</SaleContainer>}
      <Price>{price} $</Price>
      <FeaturesTitle>Характеристики:</FeaturesTitle>
      <FeaturesContainer
        sections={[
          {
            data: [
              `Цвет: ${color}`,
              `Внутреняя память: ${internalMem} ГБ`,
              `Оперативная память: ${ram} ГБ`,
              "Диагональ экрана: " + sizeScreen + "``",
              `Вес: ${weight} гр.`
            ]
          }
        ]}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <FeatureItem>{item}</FeatureItem>}
      />
      <ButtonBuyContainer>
        <ButtonBuy>Купить</ButtonBuy>
      </ButtonBuyContainer>
    </MainContainer>
  );
};

export default withNavigation(ItemDetail);
