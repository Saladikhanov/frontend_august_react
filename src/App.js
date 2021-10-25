import { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [laundryInput, setLaundryInput] = useState();
  const [dateInput, setDateInput] = useState();
  const [formData, setFormData] = useState();
  const [laundryArray, setLaundryArray] = useState([]);

  useEffect(() => {
    const newFormData = {
      laundryInput: laundryInput,
      dateInput: dateInput,
    };

    setFormData(newFormData);
  }, [laundryInput, dateInput]);

  return (
    <div>
      <Form
        laundryInput={laundryInput}
        setLaundryInput={setLaundryInput}
        setLaundryArray={setLaundryArray}
        dateInput={dateInput}
        setDateInput={setDateInput}
      />
      <List laundryArray={laundryArray} />
    </div>
  );
}

export default App;
