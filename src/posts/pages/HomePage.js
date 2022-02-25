import MenuUser from "../../shared/components/userMenu/MenuUser";
import { Outlet } from "react-router-dom";
import SideBar from "../../chat/components/contacts/SideBar";
import classes from "./HomePage.module.css";

const MainPage = function (props) {
  const containerStyle = `${classes.container}  ${
    !props.logged ? classes.blur : ""
  }`;
  return (
    <div className={containerStyle}>
      <MenuUser />
      <Outlet />
      <SideBar className={classes.contacts} />
    </div>
  );
};

export default MainPage;
