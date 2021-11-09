import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import AppContext from "../context/AppContext";
import { getUserById } from "../lib/firebaseFunctions";

function Profile() {
  const appContext = useContext(AppContext);
  const [userProfile, setUserProfile] = useState();
  // window.location is also an option
  const location = useLocation();

  useEffect(() => {
    const userIdFromLocation = location.pathname.replace("/user/", "");
    console.log(userIdFromLocation);
    const userById = getUserById(userIdFromLocation);
    userById
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserProfile(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location]);

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

  useEffect(() => {
    if (userProfile) {
      console.log();
    }
  }, [userProfile]);

  return (
    <div className={``}>
      Profile
      {userProfile && (
        <div>
          {userProfile.email}
          {userProfile.authId}
          {new Date(userProfile.created_date).toString()}
          {new Date(userProfile.updated_date).toString()}
          {/* {usersArray.map((item) => {
          return <Link to={`/user/${item.id}`}>{item.firstName}</Link>;
        })} */}
        </div>
      )}
    </div>
  );
}

export default Profile;
