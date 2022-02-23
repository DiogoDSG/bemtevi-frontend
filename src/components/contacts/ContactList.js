import ContactItem from './ContactItem';
import classes from './ContactList.module.css';

const DUMMY_CONTACTS = [
  { name: 'Simão Barreto' },
  { name: 'Garret Maciel' },
  { name: 'Felipe Burda' },
  { name: 'Pessego Pedro' },
  { name: 'Lucker Lucker' },
  { name: 'Victor Jare' },
];

const ContactList = function (props) {
  return (
    <div className={classes.list}>
      {DUMMY_CONTACTS.map(contact => {
        return <ContactItem key={Math.random()} name={contact.name} />;
      })}
    </div>
  );
};

export default ContactList;
