import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  changeAlertFn = () => {
    this.props.switchAlert();
    setTimeout(() => {
      this.props.switchAlert();
    }, 2500);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name) {
      const isNameExist = this.props.items.some(
        contact => contact.name === this.state.name,
      );
      !isNameExist
        ? this.props.onAddContact({
            name: this.state.name,
            number: this.state.number,
          })
        : this.changeAlertFn();

      this.setState({
        name: '',
        number: '',
      });
    }
    return;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>NAME</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <h2>NUMBER</h2>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="number"
            placeholder="123-321-1111"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.protoType = {
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(contactsActions.addContact(contact)),
  switchAlert: () => dispatch(contactsActions.existContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
