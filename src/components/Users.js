import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Users() {
  const usersArray = [
    {
      firstName: "Susan",
      lastName: "Doe",
      id: 1,
    },
    {
      firstName: "Joe",
      lastName: "Doe",
      id: 2,
    },
    {
      firstName: "Sharon",
      lastName: "Doe",
      id: 3,
    },
  ];

  return (
    <div className={``}>
      Users
      <div>
        {usersArray.map((item) => {
          return <Link to={`/user/${item.id}`}>{item.firstName}</Link>;
        })}
      </div>
    </div>
  );
}

export default Users;
