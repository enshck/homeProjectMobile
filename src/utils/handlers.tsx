import firebase from "react-native-firebase";

export const signOutHandler = async () => {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err);
  }
};
