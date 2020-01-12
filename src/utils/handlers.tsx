import firebase from "react-native-firebase";

import { IOrderElement, IGoodsData, IProfile } from "./interfaces";

export const signOutHandler = async () => {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err);
  }
};

export const getOrders = (
  userId: string,
  setOrdersHandler: (data: any) => void,
  setFetching?: (status: boolean) => void
) => {
  firebase
    .firestore()
    .collection("orders")
    .doc(userId)
    .get()
    .then(elem => {
      setOrdersHandler(elem.data());
      setFetching && setFetching(false);
    });
};

export const buyButtonHandler = ({
  orders,
  singleGood,
  profile,
  setOrders
}: {
  orders: IOrderElement[];
  singleGood: IGoodsData;
  profile: IProfile;
  setOrders: (orders: IOrderElement[]) => void;
}) => {
  const isCreated = orders.some(
    elem => elem.goodsData.goodId === singleGood.goodId
  );

  if (isCreated) {
    orders.forEach((elem, item) => {
      const { goodsData } = elem;
      if (goodsData.goodId === singleGood.goodId) {
        orders[item].count++;
      }
    });
  } else {
    orders.push({
      count: 1,
      goodsData: singleGood
    });
  }

  firebase
    .firestore()
    .collection("orders")
    .doc(profile.uid)
    .set({
      ordersData: orders
    })
    .then(result => {
      getOrders(profile.uid, setOrders);
    })
    .catch(err => console.log(err));
};
