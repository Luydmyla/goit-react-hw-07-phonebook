import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.styled.js';
import {
  List,
  ContactListItem,
  ContactListNumber,
  // ContactListButton,
} from './ContactList.styled';

// const ContactList = ({ contacts, onDeleteContactList }) => (
const ContactList = ({ contacts }) => (
  <List>
    {contacts.map(({ id, name, poone }) => (
      <ContactListItem key={id}>
        <p>
          {name} : <ContactListNumber> {poone} </ContactListNumber>
        </p>
        {/* <ContactListButton
          type="button"
          onClick={() => onDeleteContactList(id)}
        >
          Удалить
        </ContactListButton> */}
      </ContactListItem>
    ))}
  </List>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
