import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Form = (props) => {
  const { setLaundryItems } = props;
  const [statusInput, setStatusInput] = useState();

  const handleStatusInput = (e) => {
    const newLaundryObj = {
      type: "pants",
      status: e.target.value,
    };
    // console.log(newLaundryObj);
    setStatusInput(newLaundryObj);
  };

  const handleSubmit = () => {
    console.log(statusInput);
    setLaundryItems((prevState) => {
      return [...prevState, statusInput];
    });
  };

  //   useEffect(() => {
  //     console.log(statusInput);
  //   }, [statusInput]);

  return (
    <>
      <input type="text" placeholder="status" onChange={handleStatusInput} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Form;
