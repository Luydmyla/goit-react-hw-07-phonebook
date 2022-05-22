import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.styled.js';
import {
  List,
  ContactListItem,
  ContactListNumber,
  ContactListName,
  Contact,
  ContactListButton,
} from './ContactList.styled';

// const ContactList = ({ contacts, onDeleteContactList }) => (
const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ name, phone, id }) => (
      <ContactListItem key={id}>
        <Contact>
          <ContactListName> {name} : </ContactListName>
          <ContactListNumber> {phone} </ContactListNumber>
        </Contact>
        <ContactListButton type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </ContactListButton>
      </ContactListItem>
    ))}
  </List>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
