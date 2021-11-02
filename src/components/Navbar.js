import "../App.css";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { useContext } from "react/cjs/react.development";

function Navbar() {
  const appContext = useContext(AppContext);
  return (
    <div className="">
      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
      <Link to="/form">Form</Link>
      {appContext.user && (
        <Link to={`/user/${appContext.user.id}`}>Profile</Link>
      )}
    </div>
  );
}

export default Navbar;
