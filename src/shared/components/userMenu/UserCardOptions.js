import classes from "./UserCardOptions.module.css";

import { useContext } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { logoutUser } from "../../util/api-user";
import AuthContext from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import OptionsCard from "../UI/OptionsCard";

const UserCardOptions = function (props) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = function () {
    logoutUser(authCtx.token);
    authCtx.logout();
    navigate("/login");
  };

  const handleSettingsClick = function () {
    navigate("/home/edit-profile");
  };

  return (
    <OptionsCard onBlur={props.onBlur}>
      <div onClick={props.onViewProfile}>
        <IoPersonOutline />
        <span>View Profile</span>
      </div>
      <div onClick={handleSettingsClick}>
        <IoSettingsOutline />
        <span>Settings</span>
      </div>
      <div className={`${classes.logout}`} onClick={handleLogout}>
        <IoLogOutOutline />
        <span>Logout</span>
      </div>
    </OptionsCard>
  );
};

export default UserCardOptions;
