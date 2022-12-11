// import { chengeFilter } from 'redux/slice/contactsSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import { ListContacts } from '../ListContacts/ListContacts';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
// import { useEffect } from 'react';
import { Wrapper } from './App.styled';

export const App = () => {
  // const contact = useSelector(state => state.contact);
  // const filterValueSelector = useSelector(state => state.contacts.filter);

  // const contacts = localStorage.getItem('contacts');
  // const parseContacts = JSON.parse(contacts);
  // if (parseContacts) {
  //   setContacts(parseContacts);
  // }

  // function Fares(fsf) {}
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const getNewContact = dataValue => {
  //   if (checkContacts(dataValue.name)) {
  //     return alert(`${dataValue.name} is already in contacts`);
  //   }
  //   setContacts(prevState => [...prevState, { id: nanoid(), ...dataValue }]);
  // };

  // const checkContacts = e => {
  //   return contacts.find(
  //     contact => contact.name.toLowerCase() === e.toLowerCase()
  //   );
  // };

  // const ChangeFilter = e => {
  //   dispatch(chengeFilter(e.target.value));
  // };

  // const handlDeleteContacts = id => {
  //   setContacts(
  //     contacts.filter(contact => {
  //       return contact.id !== id;
  //     })
  //   );
  // };

  // const filterContact = () => {
  //   const filterNormalized = filterValueSelector.toLowerCase();
  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filterNormalized);
  //   });
  // };

  return (
    <Wrapper>
      <div>
        <h1>Phonebook </h1>
        <ContactForm />
      </div>

      <section>
        <div>
          <Filter />
          <h2>Contacts</h2>
          <ListContacts
          // contacts={filterContact()}
          // handlDeleteContacts={handlDeleteContacts}
          />
        </div>
      </section>
    </Wrapper>
  );
};
