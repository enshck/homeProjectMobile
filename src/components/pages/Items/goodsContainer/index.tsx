import React from "react";

import {
  MainContainer,
  GoodElement,
  ItemImage,
  ItemName,
  ItemId
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { IGoodsData, IGoodsReducers } from "../../../../utils/interfaces";

const GoodsContainer = () => {
  const goodsData = useSelector<IGoodsReducers, IGoodsData[]>(
    state => state.goods
  );

  console.log(goodsData, ">><<<");
  return (
    <MainContainer>
      {goodsData.map(elem => {
        const { goodId, goodName, isSale, parametrs, pictureUrl, price } = elem;

        return (
          <GoodElement>
            <ItemImage
              // style={{ resizeMode: "cover" }}
              source={{
                uri: pictureUrl
              }}
            />
            <ItemName>{goodName}</ItemName>
            <ItemId>{goodId}</ItemId>
          </GoodElement>
        );
      })}
    </MainContainer>
  );
};

export default GoodsContainer;
