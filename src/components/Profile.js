import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import AppContext from "../context/AppContext";
function Profile() {
  const appContext = useContext(AppContext);

  //   useEffect(() => {
  //     if (appContext.user) {
  //       // do user things
  //       console.log(appContext.user);
  //     }
  //   }, [appContext.user]);

  // window.location is also an option
  const location = useLocation();
  useEffect(() => {
    // // const userId = location.pathname.replace("/user/", "");
    const idUserArray = location.pathname.split("/");
    const idUser = idUserArray.pop();
    // // const idUser = idUserArray[idUserArray.length - 1];
    // console.log(idUser);
    // setUser(idUser);

    if (appContext.user && parseInt(idUser) === appContext.user.id) {
      console.log(appContext.user);
    }
  }, [appContext.user, location.pathname]);

  return (
    <div className={``}>
      Profile
      <div>
        {/* {usersArray.map((item) => {
          return <Link to={`/user/${item.id}`}>{item.firstName}</Link>;
        })} */}
      </div>
    </div>
  );
}

export default Profile;
