import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import Loader from "./Loader";
import AppContext from "../context/AppContext";

function Form() {
  const appContext = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState();

  useEffect(() => {
    console.log(appContext.laundryArray);
  }, [appContext.laundryArray]);

  const handleChangeLaundry = (e) => {
    // Don't change state like the next line . . .
    // laundryInput = "new value"

    // Change state like this!
    appContext.setLaundryInput(e.target.value);
  };

  const handleChangeDate = (e) => {
    appContext.setDateInput(e.target.value);
  };

  const handleChangeCustomer = (e) => {
    appContext.setCustomerInput(e.target.value);
  };

  const handleChangeWorker = (e) => {
    appContext.setWorkerInput(e.target.value);
  };

  // useEffect(() => {
  //   // setFormData({});
  //   console.log(formData);
  // }, [laundryArray]);

  const handleSubmit = () => {
    // START LOADER --> Loading . . .
    // HIDE BUTTON
    setIsLoading(true);
    const catURL = "https://api.thecatapi.com/v1/images/search";

    fetch(catURL)
      .then((response) => response.json())
      .then((data) => {
        appContext.setCatData(data);
        const finalData = appContext.formData;
        finalData["createdDate"] = new Date();
        finalData["id"] = uuidv4();
        finalData["cat_photo"] = data[0]["url"];

        appContext.setLaundryArray((prevState) => {
          return [finalData, ...prevState];
        });

        // STOP LOADER
        // SHOW BUTTON
        setIsLoading(false);
        const workerName = appContext.formData["workerInput"];
        // CLEAR FORM
        appContext.setLaundryInput("");
        appContext.setDateInput("");
        appContext.setCustomerInput("");
        appContext.setWorkerInput("");
        appContext.setFormData({});

        // SHOW ALERT
        if (workerName === "Jon") {
          // Show error
          appContext.setShowAlert("error");
        } else {
          // Success
          appContext.setShowAlert("success");
        }

        setTimeout(() => {
          appContext.setShowAlert("false");
          setRedirect("/");
        }, [2000]);

        // setTimeout(() => {
        //   // STOP LOADER
        //   // SHOW BUTTON
        //   setIsLoading(false);
        //   const workerName = formData["workerInput"];
        //   // CLEAR FORM
        //   setLaundryInput("");
        //   setDateInput("");
        //   setCustomerInput("");
        //   setWorkerInput("");
        //   setFormData({});

        //   // SHOW ALERT
        //   if (workerName === "Jon") {
        //     // Show error
        //     setShowAlert("error");
        //   } else {
        //     // Success
        //     setShowAlert("success");
        //   }

        //   setTimeout(() => {
        //     setShowAlert("false");
        //   }, [2000]);
        // }, [2000]);
      });
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    appContext.setFormData({ ...appContext.formData, [name]: value });
  };

  // // Another solution with similar code but same result
  // const handleChangeInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   appContext.setFormData((prevState) => {
  //     return { ...prevState, ...{ [name]: value } };
  //   });
  // };

  return (
    <div>
      Form
      {redirect && <Redirect to={redirect} />}
      <input
        onChange={handleChangeInput}
        type="text"
        placeholder="Do you have laundry?"
        value={appContext.formData["laundryInput"]}
        name="laundryInput"
      />
      <input
        onChange={handleChangeInput}
        type="date"
        value={appContext.formData["dateInput"]}
        name="dateInput"
      />
      <input
        onChange={handleChangeInput}
        type="text"
        placeholder="Customer"
        value={appContext.formData["customerInput"]}
        name="customerInput"
      />
      <input
        onChange={handleChangeInput}
        type="text"
        placeholder="Worker"
        value={appContext.formData["workerInput"]}
        name="workerInput"
      />
      {/* {formData &&
        formData["laundryInput"] &&
        formData["dateInput"] &&
        formData["customerInput"] &&
        formData["workerInput"] && (
          <button onClick={handleSubmit}>Submit</button>
        )} */}
      {isLoading && <Loader />}
      {!isLoading && (
        <button
          disabled={!appContext.isFormComplete}
          className={`submit-button-${!appContext.isFormComplete}`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default Form;
