import { useState } from "react";
import "../App.css";

function Form(props) {
  const {
    laundryInput,
    setLaundryInput,
    setLaundryArray,
    dateInput,
    setDateInput,
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

  const handleSubmit = () => {
    const formData = {
      laundryInput: laundryInput,
      dateInput: dateInput,
    };
    setLaundryArray((prevState) => {
      return [formData, ...prevState];
    });
  };

  return (
    <div>
      {/* Form */}
      <input
        onChange={handleChangeLaundry}
        type="text"
        placeholder="Do you have laundry?"
      />
      <input
        onChange={handleChangeDate}
        type="date"
        placeholder="When do you need it clean?"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
