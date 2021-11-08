import { useContext, useEffect, useState } from "react/cjs/react.development";
import { Redirect } from "react-router-dom";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import AppContext from "../context/AppContext";
import firebase from "../lib/firebase";

function Login() {
  const appContext = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const [redirect, setRedirect] = useState();

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const dbRef = firebase.database().ref();
        dbRef
          .child("users")
          .child(user.uid)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              appContext.setUser(snapshot.val());
              setRedirect("/");
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    // formData["id"] = uuidv4();
    // console.log(formData);
    // const usersDB = JSON.parse(localStorage.getItem("usersDB"));
    // if (usersDB[formData.email]) {
    //   appContext.setUser(usersDB[formData.email]);
    // } else {
    //   console.log("not there");
    // }
    // console.log(usersDB[formData.email]);
  };

  return (
    <div>
      {redirect && <Redirect to={redirect} />}
      <input
        type="text"
        placeholder="email"
        onChange={handleChangeInput}
        value={formData["email"]}
        name="email"
      />
      <input
        type="text"
        placeholder="password"
        onChange={handleChangeInput}
        value={formData["password"]}
        name="password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
