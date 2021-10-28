import { useState } from "react/cjs/react.development";
import "../App.css";
import Form from "./Form";
import AppContext from "../context/AppContext";
import { useContext } from "react";

function List() {
  const appContext = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (e) => {
    const newArray = appContext.laundryArray.filter((item) => {
      return item.id !== e.target.value;
    });
    appContext.setLaundryArray(newArray);
  };

  const handleEdit = (e) => {
    console.log("edit");
    setIsEditing(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        isEditing: isEditing,
      }}
    >
      <div>
        {/* List */}
        {appContext.catData && <img src={appContext.catData[0]["url"]} />}
        {!appContext.catData && <div>No cat</div>}
        {/* {appContext.catData && !isEditing ? (
        <img src={appContext.catData[0]["url"]} />
      ) : (
        <div>No cat</div>
      )} */}
        {appContext.laundryArray.map((item, index) => {
          return (
            <div key={item.dateInput + index}>
              {<div>{"Worker: " + item.workerInput}</div>}
              {<div>{"Customer: " + item.customerInput}</div>}
              {<div>{item.laundryInput}</div>}
              {<div>{item.dateInput}</div>}
              <div>
                <button value={item.id} onClick={handleDelete}>
                  Delete
                </button>
                <button value={item.id} onClick={handleEdit}>
                  Edit
                </button>
              </div>
              {isEditing === item.id && (
                <div>
                  <input type="text" placeholder="Do you have laundry?" />
                  <input type="date" placeholder="When do you need it clean?" />
                  <input type="text" placeholder="When do you need it clean?" />
                  <input type="text" placeholder="When do you need it clean?" />
                </div>
                // <Form parent="List" />
              )}
            </div>
          );
        })}
      </div>
    </AppContext.Provider>
  );
}

export default List;
