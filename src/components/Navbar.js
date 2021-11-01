import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <Link to="/home">Home</Link>
      <Link to="/list">List</Link>
      <Link to="/form">Form</Link>
    </div>
  );
}

export default Navbar;
