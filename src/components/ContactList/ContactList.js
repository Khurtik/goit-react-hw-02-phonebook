import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          {item.name} :{item.number}
          {/* <input
            checked={el.completed}
            type="checkbox"
            onChange={() => onUpdate(el.id)}
          /> */}
          {/* <button type="button" onClick={() => onDelete(el.id)}>
            delete
          </button> */}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export default ContactList;
