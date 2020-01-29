import React from "react";
import { Text } from "react-native";

import { MainContainer, TextMessage, SuccessPicture } from "./styles";
import successImage from "../../../../img/successImage.png";

const OrderSuccessScreen = () => {
  return (
    <MainContainer>
      <TextMessage>
        Спасибо. Ваш заказ принят. Наши менеджеры скоро свяжутся с вами
      </TextMessage>
      <SuccessPicture source={successImage} />
    </MainContainer>
  );
};

export default OrderSuccessScreen;
