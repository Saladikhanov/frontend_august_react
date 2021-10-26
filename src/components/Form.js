import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../App.css";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
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
    parent,
  } = props;

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
    const finalData = formData;
    finalData["createdDate"] = new Date();

    if (parent === "App") {
      finalData["id"] = uuidv4();
    }

    if (parent === "List") {
      finalData["id"] = formData["id"];
    }

    setLaundryArray((prevState) => {
      return [finalData, ...prevState];
    });
    setLaundryInput("");
    setDateInput("");
    setCustomerInput("");
    setWorkerInput("");
    setFormData({});
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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

      {
        <button
          disabled={!isFormComplete}
          className={`submit-button-${!isFormComplete}`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      }
    </div>
  );
}

export default Form;
