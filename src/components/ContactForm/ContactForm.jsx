// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from 'redux/slice/contactsSlice';
import {
  SectionForm,
  Form,
  LabelForm,
  Input,
  TextForm,
  ButtonForm,
} from './ContactForm.styled';
import { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      setName('');
      setNumber('');
      return alert(`${data.name} is already in contacts`);
    }
    dispatch(addContacts(data));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <SectionForm>
      <Form onSubmit={handleSubmit}>
        <LabelForm>
          <TextForm>Name</TextForm>
          <Input
            id={nanoid()}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </LabelForm>
        <LabelForm>
          <TextForm>Number</TextForm>
          <Input
            id={nanoid()}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </LabelForm>

        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    </SectionForm>
  );
};
// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
