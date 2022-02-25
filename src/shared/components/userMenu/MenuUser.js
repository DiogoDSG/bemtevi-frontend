import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import MenuUserCard from "./MenuUserCard";
import UserCardOptions from "./UserCardOptions";
import UserContext from "../../context/user-context";
import MenuItems from "./MenuItems";
import Card from "../UI/Card";
import classes from "./MenuUser.module.css";

const MenuUser = function () {
  const [openProfileOptions, setOpenProfileOptions] = useState(false);
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const nameToDisplay = `${userCtx.firstName} ${userCtx.lastName}`;

  const handleProfileOptionsClick = function () {
    setOpenProfileOptions((prev) => !prev);
  };

  const handleViewProfile = function () {
    setOpenProfileOptions(false);
    navigate("/home/profile");
  };

  const handleBlur = () => setOpenProfileOptions(false);

  return (
    <Card start>
      <MenuUserCard
        fullName={nameToDisplay}
        username={userCtx.username}
        onOptionClick={handleProfileOptionsClick}
      />
      {openProfileOptions && (
        <UserCardOptions
          onBlur={handleBlur}
          onViewProfile={handleViewProfile}
        />
      )}
      <MenuItems />
    </Card>
  );
};

export default MenuUser;
