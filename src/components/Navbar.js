import "../App.css";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { useContext } from "react/cjs/react.development";
import firebase from "../lib/firebase";

function Navbar() {
  const appContext = useContext(AppContext);
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("signed out");
        appContext.setUser();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar">
      {appContext.user && (
        <div className="left-nav-wrapper">
          <Link to="/">Home</Link>
          <Link to="/list">List</Link>
          <Link to="/form">Form</Link>
          <Link to="/account">Account</Link>
          <div onClick={handleLogout}>Logout</div>
        </div>
      )}

      {!appContext.user && (
        <div className="right-nav-wrapper">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
      {/* {appContext.user && (
        <Link to={`/user/${appContext.user.id}`}>Profile</Link>
      )} */}
    </div>
  );
}

export default Navbar;
