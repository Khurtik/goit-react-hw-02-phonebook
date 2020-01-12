import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
  };

  addContact = name => {
    const contactToAdd = {
      name,
      id: shortid.generate(),
      number: '',
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactToAdd],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
