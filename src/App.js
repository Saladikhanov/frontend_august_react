import { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Alert from "./components/Alert";
import AppContext from "./context/AppContext";

import "./App.css";

function App() {
  const [laundryInput, setLaundryInput] = useState();
  const [dateInput, setDateInput] = useState();
  const [customerInput, setCustomerInput] = useState();
  const [workerInput, setWorkerInput] = useState();
  const [formData, setFormData] = useState();
  const [laundryArray, setLaundryArray] = useState([]);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [showAlert, setShowAlert] = useState("false");
  const [catData, setCatData] = useState();

  useEffect(() => {
    if (catData) {
      console.log(catData);
    }
  }, [catData]);

  useEffect(() => {
    if (
      formData &&
      formData["laundryInput"] &&
      formData["dateInput"] &&
      formData["customerInput"] &&
      formData["workerInput"]
    ) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [formData]);

  useEffect(() => {
    const newFormData = {
      laundryInput: laundryInput,
      dateInput: dateInput,
      customerInput: customerInput,
      workerInput: workerInput,
      // createdDate: new Date(),
      // id: uuidv4(),
    };

    setFormData(newFormData);
  }, [laundryInput, dateInput, customerInput, workerInput]);

  // useEffect(() => {
  //   if (formData) {
  //     console.log(formData);
  //   }
  // }, [formData]);

  useEffect(() => {
    if (laundryArray) {
      console.log(laundryArray);
    }
  }, [laundryArray]);

  return (
    <AppContext.Provider
      value={{
        laundryArray: laundryArray,
        setLaundryArray: setLaundryArray,
        catData: catData,
      }}
    >
      <div className="app-wrapper">
        {showAlert !== "false" && <Alert showAlert={showAlert} />}
        <Form
          laundryInput={laundryInput}
          setLaundryInput={setLaundryInput}
          setLaundryArray={setLaundryArray}
          dateInput={dateInput}
          setDateInput={setDateInput}
          customerInput={customerInput}
          setCustomerInput={setCustomerInput}
          workerInput={workerInput}
          setWorkerInput={setWorkerInput}
          formData={formData}
          setFormData={setFormData}
          isFormComplete={isFormComplete}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          setCatData={setCatData}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
