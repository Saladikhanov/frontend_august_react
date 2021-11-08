import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import List from "./components/List";
import Form from "./components/Form";
import Users from "./components/Users";
import Profile from "./components/Profile";
import AppContext from "./context/AppContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [user, setUser] = useState();

  const [laundryInput, setLaundryInput] = useState();
  const [dateInput, setDateInput] = useState();
  const [customerInput, setCustomerInput] = useState();
  const [workerInput, setWorkerInput] = useState();
  const [formData, setFormData] = useState({});

  const [laundryArray, setLaundryArray] = useState([]);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [showAlert, setShowAlert] = useState("false");
  const [catData, setCatData] = useState();
  const [randomString, setRandomString] = useState("random string");

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  // useEffect(() => {
  //   // After user logs in, get user object from successful login
  //   // setUser({
  //   //   firstName: "Joe",
  //   //   lastName: "Doe",
  //   //   laundry: "shirts",
  //   //   id: 2,
  //   // });
  // }, []);

  useEffect(() => {
    // After user logs in, get user object from successful login
    if (user) {
      // do some user stuff
      console.log(user);
    }
  }, [user]);

  return (
    <div>
      <AppContext.Provider
        value={{
          user: user,
          setUser: setUser,
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/user/:id" component={Profile} />
          <PrivateRoute exact path="/list" component={List} />
          <PrivateRoute exact path="/form" component={Form} />
          <Route exact path="/" component={Home} />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
