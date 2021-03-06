import firebase from "../lib/firebase";

export const getUserById = async (userId) => {
  const dbRef = firebase.database().ref();
  return dbRef.child("users").child(userId).get();
};
