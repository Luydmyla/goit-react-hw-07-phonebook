import Form from './Form';
import ContactList from './ContactList';
import Spinner from './Spinner/Spinner';
import Filter from './Filter';
import './container.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../redux/filterSlice';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} from 'redux/itemsSlice';

export default function App() {
  const { data, isFetching } = useFetchContactsQuery();
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const [deleteItem] = useDeleteContactsMutation();
  // useCreateContactsMutation();
  const [newContact] = useCreateContactsMutation();
  const addContact = ({ name, phone }) => {
    const contact = {
      name,
      phone,
    };
    if (data.some(contact => contact.name === name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    newContact(contact);
    // setContacts([contact, ...data]);
  };

  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
    // setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    // const { contacts, filter } = this.state;
    const normalizedFilter = value.toLowerCase();
    //  return contacts.filter(contact =>
    // console.log(items);
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // const deleteContact = contactId => {
  //   // console.log(contactId);
  //   dispatch(deleteContact, contactId);
  //   // setContacts(contacts.filter(contact => contact.id !== contactId));
  //   dispatch(updateFilter(''));
  // };

  return (
    <div className="Container">
      <h1>Phonebook</h1>
      {/* <Form onSubmit={addContact} /> */}
      <Form onSubmit={addContact} />
      {/* <Form onSubmit={<Form onSubmit={contact => dispatch(addContact(contact))} />} /> */}
      <h2> Contacts : </h2>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <Filter value={value} onChange={changeFilter} />
      {isFetching && <Spinner />}
      {/* {data && (
        <ContactList contacts={data} onDeleteContactList={deleteContact} />
      )} */}
      {data && (
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteItem}
        />
      )}
    </div>
  );
}
