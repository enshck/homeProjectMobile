import React from "react";
import { withNavigation } from "react-navigation";
import { useSelector, useDispatch } from "react-redux";

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
import { setOrders } from "../../../store/actions";
import { buyButtonHandler } from "../../../utils/handlers";
import {
  IGoodsReducers,
  IGoodsData,
  IOrderElement,
  IOrdersReducers,
  IProfileReducers,
  IProfile
} from "../../../utils/interfaces";

interface IProps {}

const ItemDetail = ({ route, navigation }: IProps) => {
  const { params } = navigation.state;
  const { goodId, goodName, isSale, parametrs, pictureUrl, price } = params;
  const { color, internalMem, ram, sizeScreen, weight } = parametrs;

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
        <ButtonBuy
          onPress={() =>
            buyButtonHandler({
              orders: orders,
              singleGood: params,
              profile,
              setOrders: orders => dispatch(setOrders(orders))
            })
          }
        >
          Купить
        </ButtonBuy>
      </ButtonBuyContainer>
    </MainContainer>
  );
};

export default withNavigation(ItemDetail);
