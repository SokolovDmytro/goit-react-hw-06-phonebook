import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import Alert from "./alert/Alert";
import { CSSTransition } from "react-transition-group";
import styles from './App.module.css'

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: "",
    name: "",
    number: "",
    alert: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts') !== null ? JSON.parse(localStorage.getItem('contacts')):[];
    this.setState({contacts})
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  submitContact = data => {
    const isNameExist = this.state.contacts.some(
      contact => contact.name === data.name
    );
    !isNameExist
      ? this.setState(prevstate => ({
          contacts: [...prevstate.contacts, data]
        }))
      // : alert(`${data.name} is already in contact`);
      : this.setState({
        alert: true
      });
      setTimeout(() => {
        this.setState({
          alert: false
        });
      }, 2500);
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== id)
    }));
  };

  getName = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
  };

  render() {
    const {filter, alert} = this.state;
    return (
      <>
      <Alert alert={alert}/>
      <CSSTransition
        in={true}
        timeout={500}
        classNames={styles}
        appear={true}
        unmountOnExit
        >
        <p className={styles.title}>Phonebook</p>
      </CSSTransition>

        <ContactForm submitContact={this.submitContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 1 && <Filter getName={this.getName} value={filter} />}
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;