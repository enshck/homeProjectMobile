import React, { Fragment, useEffect } from "react";
import firebase from "react-native-firebase";

import { useDispatch } from "react-redux";
import { setOrders, setProfileData } from "../store/actions";

interface IProps {
  children: any;
}

const MainWrapper = ({ children }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setProfileData(user));
        firebase
          .firestore()
          .collection("orders")
          .doc(user.uid)
          .get()
          .then(doc => {
            const docData = doc.data();
            dispatch(setOrders(docData));
          });
      }
    });
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default MainWrapper;
