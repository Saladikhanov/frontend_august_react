import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import List from "./List";
import Form from "./Form";
import Alert from "./Alert";
import AppContext from "../context/AppContext";

function Home() {
  const appContext = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.search.replace(/\?token=/g, ""));
    console.log("window.location", window.location);
  }, []);

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
      {appContext.showAlert !== "false" && (
        <Alert showAlert={appContext.showAlert} />
      )}
      <Form />
      <List />
    </div>
  );
}

export default Home;
