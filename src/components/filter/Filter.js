import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

// import PropTypes from "prop-types";

const Filter = ({ filter, getFilterValue, getName, filterValue }) => (
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
// Filter.propTypes = {
//   getName: PropTypes.func.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
