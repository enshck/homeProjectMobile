import React from "react";
import { withNavigation } from "react-navigation";
import { useSelector, useDispatch } from "react-redux";

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
import {
  IGoodsData,
  IGoodsReducers,
  IOrdersReducers,
  IOrderElement,
  IProfile,
  IProfileReducers
} from "../../../../utils/interfaces";
import { buyButtonHandler } from "../../../../utils/handlers";
import { setOrders } from "../../../../store/actions";

interface IProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

const GoodsContainer = ({ navigation }: IProps) => {
  const goodsData = useSelector<IGoodsReducers, IGoodsData[]>(
    state => state.goods
  );
  const orders = useSelector<IOrdersReducers, IOrderElement[]>(
    state => state.orders
  );
  const profile = useSelector<IProfileReducers, IProfile>(
    state => state.profile
  );
  const dispatch = useDispatch();

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
            <Details onPress={() => navigation.navigate("DetailsItem", elem)}>
              Подробнее
            </Details>
            <ButtonBuyContainer>
              <ButtonBuy
                onPress={() =>
                  buyButtonHandler({
                    orders: orders,
                    singleGood: elem,
                    profile,
                    setOrders: orders => dispatch(setOrders(orders))
                  })
                }
              >
                Купить
              </ButtonBuy>
            </ButtonBuyContainer>
          </GoodElement>
        );
      })}
    </MainContainer>
  );
};

export default withNavigation(GoodsContainer);
