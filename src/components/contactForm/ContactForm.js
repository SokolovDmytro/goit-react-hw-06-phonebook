import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
  name: "",
  number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4()
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
  number: PropTypes.string
};

export default ContactForm;