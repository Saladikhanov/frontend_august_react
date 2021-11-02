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
    formData["id"] = uuidv4();
    console.log(formData);
    appContext.setUser(formData);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="first name"
        onChange={handleChangeInput}
        value={formData["first"]}
        name="first"
      />
      <input
        type="text"
        placeholder="last name"
        onChange={handleChangeInput}
        value={formData["last"]}
        name="last"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
