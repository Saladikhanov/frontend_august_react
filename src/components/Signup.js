import "../App.css";
import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { handleChangeInput } from "../lib/functions";
import { useEffect } from "react/cjs/react.development";

function Signup() {
  const appContext = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const handleInput = (e) => {
    handleChangeInput(e, formData, setFormData);
  };

  const handleSubmit = () => {
    const usersDB = JSON.parse(localStorage.getItem("users"));
    const keys = Object.keys(usersDB);
    if (keys.includes(formData.email)) {
      console.log("user already exists");
    } else {
      const submitObj = {
        email: formData.email,
        password: formData.password,
        created_date: Date.now(),
        id: 1,
      };
      usersDB[formData.email] = submitObj;
      localStorage.setItem("users", JSON.stringify(usersDB));
    }
  };

  useEffect(() => {
    if (
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword
      // maybe check for is it an actual email and also password strength
    ) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [formData]);

  useEffect(() => {
    if (
      formData.password !== formData.confirmPassword ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [formData]);

  return (
    <div className={``}>
      <h1>Signup</h1>
      <div>
        <input
          type="text"
          placeholder="Email"
          className={``}
          name={`email`}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Password"
          className={``}
          name={`password`}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className={``}
          name={`confirmPassword`}
          onChange={handleInput}
        />
        {showAlert && <div>Passwords must match</div>}
        <button disabled={!isFormComplete} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Signup;
