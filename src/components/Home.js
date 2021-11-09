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
    // After user logs in, get user object from successful login
    if (!appContext.user) {
      // do some user stuff
      console.log(appContext.user);
      console.log(location);
      const pagePathname = location.pathname;
      if (!pagePathname.includes("signup")) {
        appContext.setRedirect("/login");
      }
    }
    console.log(appContext.redirect);
  }, [appContext.user, location]);

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
      <h2>Home</h2>
      <div className="current-user">
        {appContext.user && <div>{appContext.user.email}</div>}
      </div>
      <h2>Other users</h2>
      <div className="other-users">
        {allUsers &&
          appContext.user &&
          Object.values(allUsers).map((item) => {
            console.log(item);
            {
              return item.email === appContext.user.email ? (
                <div>You</div>
              ) : (
                <Link to={`/user/` + item.authId}>{item.email}</Link>
              );
            }
          })}
      </div>
      {/* {appContext.showAlert !== "false" && (
        <Alert showAlert={appContext.showAlert} />
      )}
      <Form />
      <List /> */}
    </div>
  );
}

export default Home;
