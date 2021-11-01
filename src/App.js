import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Form from "./components/Form";
import AppContext from "./context/AppContext";
import Navbar from "./components/Navbar";

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
  const [randomString, setRandomString] = useState("random string");

  return (
    <div>
      <AppContext.Provider
        value={{
          laundryArray: laundryArray,
          setLaundryArray: setLaundryArray,
          catData: catData,
          randomString: randomString,
          laundryInput: laundryInput,
          setLaundryInput: setLaundryInput,
          dateInput: dateInput,
          setDateInput: setDateInput,
          customerInput: customerInput,
          setCustomerInput: setCustomerInput,
          workerInput: workerInput,
          setWorkerInput: setWorkerInput,
          formData: formData,
          setFormData: setFormData,
          isFormComplete: isFormComplete,
          setIsFormComplete: setIsFormComplete,
          showAlert: showAlert,
          setShowAlert: setShowAlert,
          setCatData: setCatData,
        }}
      >
        <Router>
          <Navbar />

          <Route path="/" component={Home} />
          <Route exact path="/list" component={List} />
          <Route path="/form" component={Form} />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
