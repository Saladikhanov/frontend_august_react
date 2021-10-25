import "../App.css";

function List(props) {
  const { laundryArray } = props;
  return (
    <div>
      {/* List */}
      {laundryArray.map((item, index) => {
        return (
          <div key={item.dateInput + index}>
            {<div>{item.laundryInput}</div>}
            {item.dateInput && <div>{item.dateInput}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default List;
