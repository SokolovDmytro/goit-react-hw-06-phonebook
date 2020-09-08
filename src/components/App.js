import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Alert from './alert/Alert';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import { connect } from 'react-redux';
import actions from '../redux/contacts/contactsActions';
import contactsActions from '../redux/contacts/contactsActions';

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: '',
    name: '',
    number: '',
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== id),
    }));
  };

  getName = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts = () => {
    return this.props.items.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Alert />
        <CSSTransition
          in={true}
          timeout={500}
          classNames={styles}
          appear={true}
          unmountOnExit
        >
          <p className={styles.title}>Phonebook</p>
        </CSSTransition>

        <ContactForm />
        <h2>Contacts</h2>
        {this.props.items.length > 1 && (
          <Filter getName={this.getName} value={filter} />
        )}
        <ContactList contacts={this.filterContacts()} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    alert: state.alert,
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(actions.changeFilter(filter)),
  switchAlert: () => dispatch(contactsActions.existContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
