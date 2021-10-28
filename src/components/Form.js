import { useContext, useEffect, useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import Loader from "./Loader";
import AppContext from "../context/AppContext";

function Form(props) {
  const appContext = useContext(AppContext);
  const {
    laundryInput,
    setLaundryInput,
    laundryArray,
    setLaundryArray,
    dateInput,
    setDateInput,
    customerInput,
    setCustomerInput,
    workerInput,
    setWorkerInput,
    formData,
    setFormData,
    isFormComplete,
    showAlert,
    setShowAlert,
    setCatData,
  } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(appContext.laundryArray);
  }, [appContext.laundryArray]);

  const handleChangeLaundry = (e) => {
    // Don't change state like the next line . . .
    // laundryInput = "new value"

    // Change state like this!
    setLaundryInput(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDateInput(e.target.value);
  };

  const handleChangeCustomer = (e) => {
    setCustomerInput(e.target.value);
  };

  const handleChangeWorker = (e) => {
    setWorkerInput(e.target.value);
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
        setCatData(data);
        const finalData = formData;
        finalData["createdDate"] = new Date();
        finalData["id"] = uuidv4();
        finalData["cat_photo"] = data[0]["url"];

        setLaundryArray((prevState) => {
          return [finalData, ...prevState];
        });

        // STOP LOADER
        // SHOW BUTTON
        setIsLoading(false);
        const workerName = formData["workerInput"];
        // CLEAR FORM
        setLaundryInput("");
        setDateInput("");
        setCustomerInput("");
        setWorkerInput("");
        setFormData({});

        // SHOW ALERT
        if (workerName === "Jon") {
          // Show error
          setShowAlert("error");
        } else {
          // Success
          setShowAlert("success");
        }

        setTimeout(() => {
          setShowAlert("false");
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

  return (
    <div>
      {/* Form */}
      <input
        onChange={handleChangeLaundry}
        type="text"
        placeholder="Do you have laundry?"
        value={laundryInput}
      />
      <input
        onChange={handleChangeDate}
        type="date"
        placeholder="When do you need it clean?"
        value={dateInput}
      />
      <input
        onChange={handleChangeCustomer}
        type="text"
        placeholder="When do you need it clean?"
        value={customerInput}
      />
      <input
        onChange={handleChangeWorker}
        type="text"
        placeholder="When do you need it clean?"
        value={workerInput}
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
          disabled={!isFormComplete}
          className={`submit-button-${!isFormComplete}`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default Form;
