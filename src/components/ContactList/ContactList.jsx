import { Contacts } from 'components/Shared.styled';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Contacts>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </Contacts>
  );
};

export default ContactList;
