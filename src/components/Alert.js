import { useState } from "react/cjs/react.development";
import "../App.css";

function Alert(props) {
  const { showAlert } = props;

  return <div className={`alert-${showAlert}`}>{showAlert}</div>;
}

export default Alert;
