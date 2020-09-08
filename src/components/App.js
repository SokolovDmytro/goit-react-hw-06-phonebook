import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Alert from './alert/Alert';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import { connect } from 'react-redux';

class App extends Component {
  filterContacts = () => {
    return this.props.items.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase()),
    );
  };

  render() {
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
        {this.props.items.length > 1 && <Filter />}
        <ContactList contacts={this.filterContacts()} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    alert: state.alert,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(App);
