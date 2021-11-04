import { useContext, useEffect, useState } from "react/cjs/react.development";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import AppContext from "../context/AppContext";

function Login() {
  const appContext = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleLogin = () => {
    // formData["id"] = uuidv4();
    // console.log(formData);
    const usersDB = JSON.parse(localStorage.getItem("usersDB"));
    if (usersDB[formData.email]) {
      appContext.setUser(usersDB[formData.email]);
    } else {
      console.log("not there");
    }

    console.log(usersDB[formData.email]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={handleChangeInput}
        value={formData["email"]}
        name="email"
      />
      <input
        type="text"
        placeholder="password"
        onChange={handleChangeInput}
        value={formData["password"]}
        name="password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
