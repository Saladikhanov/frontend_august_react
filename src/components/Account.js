import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import AppContext from "../context/AppContext";
import { getUserById } from "../lib/firebaseFunctions";

function Account() {
  const appContext = useContext(AppContext);
  const [userProfile, setUserProfile] = useState();
  const [accountData, setAccountData] = useState();
  // window.location is also an option
  const location = useLocation();

  useEffect(() => {
    setAccountData({ updated_date: appContext.user.updated_date });
  }, []);

  useEffect(() => {
    console.log(accountData);
  }, [accountData]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setAccountData({ updated_data: e.target.value });
  };

  const handleEditButton = () => {
    // send request to firebase to update the user
    // if successful, update that user in your app's state
    // (sidenote: instead up updating state immediately, you could send another HTTP requst to firebase to get the updated user, and then set the state with that updated user; BUT, that takes longer)
    // Regardles, make sure your app is up-to-date with your database and vice versa
  };

  return (
    <div className={``}>
      Account
      {accountData && (
        <input
          type="text"
          onChange={handleChange}
          value={accountData.updated_date}
        />
      )}
    </div>
  );
}

export default Account;
