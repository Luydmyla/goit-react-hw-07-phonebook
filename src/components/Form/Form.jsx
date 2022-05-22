// import { Component } from 'react';
import './Form.styled.js';
import { ContactForm, FormLabel, FormInput, FormButton } from './Form.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // console.log(name);
  // console.log(phone);
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(name, number);
    props.onSubmit({ name, phone });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <FormLabel>
        Name :
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <br />
      <FormLabel>
        Number :
        <FormInput
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </ContactForm>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
