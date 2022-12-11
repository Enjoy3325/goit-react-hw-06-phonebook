// import PropTypes from 'prop-types';
import { chengeFilter } from 'redux/slice/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { InputFilter, TextFilter, LabelFilter } from './Filter.styled';
import { nanoid } from 'nanoid';
import React from 'react';

export const Filter = () => {
  const filterContact = () => {
    const filterValueSelector = useSelector(state => state.contacts.filter);

    const filterNormalized = filterValueSelector.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormalized);
    });
  };

  const ChangeFilter = e => {
    dispatch(chengeFilter(e.target.value));
  };

  return (
    <LabelFilter id={nanoid()}>
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter
        type="text"
        value={filterValueSelector}
        onChange={ChangeFilter}
      />
    </LabelFilter>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
