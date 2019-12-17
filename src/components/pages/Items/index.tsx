import React from "react";
import { useDispatch } from "react-redux";

import { useGetFirebaseData } from "../../../customHooks/useGetFirebaseData";
import { setGoodsList } from "../../../store/actions";
import { MainContainer } from "./styles";
import GoodsContainer from "./goodsContainer";

const Items = () => {
  const [getGoods, goodsData] = useGetFirebaseData();

  const dispatch = useDispatch();

  if (!goodsData.called) {
    getGoods({
      collection: "goods",
      actionHandler: goods => dispatch(setGoodsList(goods))
    });
  }

  return (
    <MainContainer>
      <GoodsContainer />
    </MainContainer>
  );
};

export default Items;
