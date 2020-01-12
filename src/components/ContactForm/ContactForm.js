import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { onAddContact } = this.props;
    onAddContact(name);

    this.setState({ name: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="true">
              Name
              <input
                name="name"
                type="text"
                onChange={this.handleChange}
                value={name}
              />
            </label>
          </p>
          <p>
            <label htmlFor="true">
              Number
              <input
                name="number"
                type="number"
                onChange={this.handleChange}
                value={number}
              />
            </label>
          </p>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

// ContactForm.propTypes = {
//   onAddContact: PropTypes.shape(PropTypes.func.isRequired).isRequired,
// };
