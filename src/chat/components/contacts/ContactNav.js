import { IoSearchOutline } from 'react-icons/io5';
import classes from './ContactNav.module.css';

const ContactNav = function (props) {
  return (
    <div className={classes.container}>
      <p>Contacts</p>
      <IoSearchOutline />
    </div>
  );
};

export default ContactNav;
