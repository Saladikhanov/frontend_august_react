import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [laundryItems, setLaundryItems] = useState([
    {
      type: "pants",
      status: "lightly dirty",
      id: "4",
    },
    {
      type: "pants",
      status: "lightly dirty",
      id: "3",
    },
    {
      type: "pants",
      status: "lightly dirty",
      id: "2",
    },
    {
      type: "pants",
      status: "lightly dirty",
      id: "1",
    },
  ]);
  const [shouldDoLaundry, setShouldDoLaundry] = useState(false);

  useEffect(() => {
    console.log(laundryItems);
    console.log(shouldDoLaundry);
  }, []);

  return (
    <div className="App">
      <Form setLaundryItems={setLaundryItems} />
      <List dirtyClothes={laundryItems} />
    </div>
  );
}

export default App;
