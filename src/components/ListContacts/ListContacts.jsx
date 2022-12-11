import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/slice/contactsSlice';
import { BoxList } from './ListContacts.styled';
import { nanoid } from 'nanoid';
import { CardContact } from '../CardContact/CardContact';
import React from 'react';

export const ListContacts = ({ contacts }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handlDeleteContacts = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <BoxList>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <CardContact
              key={nanoid()}
              id={id}
              name={name}
              number={number}
              handlDeleteContacts={handlDeleteContacts}
            ></CardContact>
          );
        })}
      </ul>
    </BoxList>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  handlDeleteContacts: PropTypes.func.isRequired,
};
