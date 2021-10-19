import { useEffect } from "react/cjs/react.development";

const List = (props) => {
  const { dirtyClothes } = props;

  useEffect(() => {
    console.log(dirtyClothes);
  }, []);

  return (
    <div>
      {dirtyClothes.map((item) => {
        return <div key={item.id}>{item.status}</div>;
      })}
    </div>
  );
};

export default List;
