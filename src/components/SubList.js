import { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";

import "../App.css";

function SubList(props) {
  const appContext = useContext(AppContext);

  useEffect(() => {
    console.log(appContext);
  }, []);

  return <div className="">{props.randomString}</div>;
}

export default SubList;
