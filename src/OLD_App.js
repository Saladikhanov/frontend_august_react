import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./App.css";

function App() {
  let [laundryName, setLaundryName] = useState("");

  useEffect(() => {
    // any code here runs

    setTimeout(() => {
      setLaundryName("Jon");
    }, [2000]);
  }, []);

  useEffect(() => {
    // any code here runs
    if (laundryName) {
      console.log(laundryName);
      // code inside here that requires laundryName have a value
    }
  }, [laundryName]);

  return (
    <div>
      The laundry belongs to: {laundryName ? laundryName : "No laundry today"}
    </div>
  );
}

export default App;
