import React, { Component } from 'react';
import cl from './contactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={cl.form} onSubmit={this.handleSubmitForm}>
        <label className={cl.inputItem}>
          Name <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={nanoid()}
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={cl.inputItem}>
          Number
          <br />
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="123-45-67"
            required
          />
        </label>
        <button type="submit" className={cl.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
