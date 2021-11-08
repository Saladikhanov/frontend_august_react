import { useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import List from "./List";
import Form from "./Form";
import Alert from "./Alert";
import AppContext from "../context/AppContext";
import firebase from "../lib/firebase";
import { useState } from "react/cjs/react.development";

function Home() {
  const appContext = useContext(AppContext);
  const location = useLocation();
  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    // console.log("location", location.search.replace(/\?token=/g, ""));
    // console.log("window.location", window.location);

    if (appContext.user) {
      // Go get fb db users
      const dbRef = firebase.database().ref();
      dbRef
        .child("users")
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            // appContext.setUser(snapshot.val());
            // setRedirect("/");
            setAllUsers(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [appContext.user]);

  useEffect(() => {
    if (appContext.catData) {
      console.log(appContext.catData);
    }
  }, [appContext.catData]);

  useEffect(() => {
    if (
      appContext.formData &&
      appContext.formData["laundryInput"] &&
      appContext.formData["dateInput"] &&
      appContext.formData["customerInput"] &&
      appContext.formData["workerInput"]
    ) {
      appContext.setIsFormComplete(true);
    } else {
      appContext.setIsFormComplete(false);
    }
  }, [appContext.formData]);

  useEffect(() => {
    const newFormData = {
      laundryInput: appContext.laundryInput,
      dateInput: appContext.dateInput,
      customerInput: appContext.customerInput,
      workerInput: appContext.workerInput,
      // createdDate: new Date(),
      // id: uuidv4(),
    };

    appContext.setFormData(newFormData);
  }, [
    appContext.laundryInput,
    appContext.dateInput,
    appContext.customerInput,
    appContext.workerInput,
  ]);

  // useEffect(() => {
  //   if (formData) {
  //     console.log(formData);
  //   }
  // }, [formData]);

  useEffect(() => {
    if (appContext.laundryArray) {
      console.log(appContext.laundryArray);
    }
  }, [appContext.laundryArray]);

  return (
    <div className="app-wrapper">
      Home
      {appContext.user && <div>{appContext.user.email}</div>}
      Other users
      {allUsers &&
        Object.values(allUsers).map((item) => {
          console.log(item);
          {
            return item.email !== appContext.user.email ? (
              <div>You</div>
            ) : (
              <Link to={`/user/` + item.authId}>{item.email}</Link>
            );
          }
        })}
      {/* {appContext.showAlert !== "false" && (
        <Alert showAlert={appContext.showAlert} />
      )}
      <Form />
      <List /> */}
    </div>
  );
}

export default Home;
