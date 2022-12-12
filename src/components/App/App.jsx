// import { chengeFilter } from 'redux/slice/contactsSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import { ListContacts } from '../ListContacts/ListContacts';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
// import { useEffect } from 'react';
import { Wrapper } from './App.styled';

export const App = () => {
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
          <ListContacts />
        </div>
      </section>
    </Wrapper>
  );
};
