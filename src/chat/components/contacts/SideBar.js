import classes from './SideBar.module.css';
import ContactNav from './ContactNav';
import ContactList from './ContactList';

const SideBar = function (props) {
  return (
    <div className={classes.container}>
      <ContactNav />
      <ContactList />
    </div>
  );
};

export default SideBar;
