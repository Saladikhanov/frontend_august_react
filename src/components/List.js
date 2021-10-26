import { useState } from "react/cjs/react.development";
import "../App.css";
import Form from "./Form";

function List(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { laundryArray, setLaundryArray } = props;

  const handleDelete = (e) => {
    const newArray = laundryArray.filter((item) => {
      return item.id !== e.target.value;
    });
    setLaundryArray(newArray);
  };

  const handleEdit = (e) => {
    console.log("edit");
    setIsEditing(e.target.value);
  };

  return (
    <div>
      {/* List */}
      {laundryArray.map((item, index) => {
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
  );
}

export default List;
