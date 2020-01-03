import React from "react";

import {
  MainContainer,
  GoodElement,
  ItemImage,
  ItemName,
  ItemId,
  Details,
  ButtonBuyContainer,
  Price
} from "./styles";
import { ButtonBuy } from "../../../../constants/styles";
import { useSelector } from "react-redux";
import { IGoodsData, IGoodsReducers } from "../../../../utils/interfaces";

const GoodsContainer = () => {
  const goodsData = useSelector<IGoodsReducers, IGoodsData[]>(
    state => state.goods
  );
  return (
    <MainContainer contentContainerStyle={{ alignItems: "center" }}>
      {goodsData.map((elem, key) => {
        const { goodId, goodName, isSale, parametrs, pictureUrl, price } = elem;

        return (
          <GoodElement key={key}>
            <ItemImage
              source={{
                uri: pictureUrl
              }}
              resizeMode={"contain"}
            />
            <ItemName>{goodName}</ItemName>
            <ItemId>Идентификатор: {goodId}</ItemId>
            <Price>${price}</Price>
            <Details>Подробнее</Details>
            <ButtonBuyContainer>
              <ButtonBuy>Купить</ButtonBuy>
            </ButtonBuyContainer>
          </GoodElement>
        );
      })}
    </MainContainer>
  );
};

export default GoodsContainer;
