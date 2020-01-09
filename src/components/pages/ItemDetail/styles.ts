import { View, Text, Image, Dimensions, SectionList } from "react-native";
import styled from "styled-components";

export const MainContainer = styled(View)`
  display: flex;
  align-items: center;
`;

export const TextData = styled(Text)``;

export const ItemPicture = styled(Image)`
  width: ${Dimensions.get("window").width};
  height: 230;
  margin: 10px 0;
`;

export const Price = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  background: rgb(254, 242, 184);
  border-radius: 5px;
  padding: 3px 10px;
  margin-top: 10px;
`;

export const SaleContainer = styled(Text)`
  font-size: 16px;
  text-transform: uppercase;
`;

export const FeaturesContainer = styled(SectionList)``;

export const FeatureItem = styled(Text)`
  font-size: 16px;
`;

export const FeaturesTitle = styled(Text)`
  font-size: 25px;
  margin: 10px 0;
`;

export const ButtonBuyContainer = styled(View)`
  margin: 10px 0;
`;
