import React, { useState } from "react";
import styled, { css } from "styled-components";

import { View as NotAnimationView, Text, Animated } from "react-native";
const { Value, View } = Animated;

export const MainContainer = styled(NotAnimationView)`
  width: 100%;
`;

export const List = styled(NotAnimationView)`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const MenuElement = styled(Text)``;

export const MenuSlider = styled(View)`
  border: 2px solid blue;
  position: absolute;
  bottom: 0;
  /* transition: 0.5s; */
  ${({ mode }: { mode: String }) =>
    mode === "orders" &&
    css`
      left: 0;
      width: 55px;
    `}
  ${({ mode }: { mode: String }) =>
    mode === "addGoods" &&
    css`
      left: 140px;
      width: 160px;
    `}
`;

// export const AnimatedMenuSlider = props => {
//   const [fadeAnim] = useState(new Value(0)); // Initial value for opacity: 0

//   React.useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 10000
//     }).start();
//   }, []);

//   return (
//     <View // Special animatable View
//     // style={{
//     //   ...props.style,
//     //   opacity: fadeAnim,         // Bind opacity to animated value
//     // }}
//     >
//       sd // {props.children}
//     </View>
//   );
// };
