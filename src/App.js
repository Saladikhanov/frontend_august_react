import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./App.css";

function App() {
  const [laundryArray, setLaundryArray] = useState([
    { laundryItem: "khakis", date: "Today", id: 0 },
  ]);
  const [laundryInput, setLaundryInput] = useState();
  const [laundryDueDate, setLaundryDueDate] = useState();

  useEffect(() => {
    if (laundryInput) {
      console.log(laundryInput);
    }
  }, [laundryInput]);

  const handleChange = (e) => {
    setLaundryInput(e.target.value);
  };

  const handleClick = (e) => {
    console.log("clicked", e.target, laundryArray);

    const newLaundryObj = {
      date: new Date(),
      laundryItem: laundryInput,
      daysUntilDue: laundryDueDate,
    };

    setLaundryArray([...laundryArray, newLaundryObj]);
  };

  return (
    <div>
      {/* // Laundry List */}
      {laundryArray.map((item) => {
        return <div>{item}</div>;
      })}

      {/* // Laundry Form */}
      <div>
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default App;
