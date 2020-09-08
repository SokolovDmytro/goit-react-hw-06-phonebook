import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

const Filter = ({ getFilterValue, filterValue }) => (
  <>
    <p>Find contact by name</p>
    <input
      type="text"
      onChange={e => getFilterValue(e.target.value)}
      value={filterValue}
    />
  </>
);

const mapStateToProps = state => {
  return {
    filterValue: state.filter,
  };
};

const mapDispatchToProps = {
  getFilterValue: contactsActions.getFilterValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
