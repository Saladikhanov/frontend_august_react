import { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [laundryInput, setLaundryInput] = useState();
  const [dateInput, setDateInput] = useState();
  const [customerInput, setCustomerInput] = useState();
  const [workerInput, setWorkerInput] = useState();
  const [formData, setFormData] = useState();
  const [laundryArray, setLaundryArray] = useState([]);
  const [isFormComplete, setIsFormComplete] = useState(false);

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
    <div>
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
        parent="App"
      />
      <List laundryArray={laundryArray} setLaundryArray={setLaundryArray} />
    </div>
  );
}

export default App;
