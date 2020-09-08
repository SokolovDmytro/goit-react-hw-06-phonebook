import React from "react";
import {connect} from 'react-redux'
import contactsActions from "../../redux/contacts/contactsActions";

// import PropTypes from "prop-types";

const Filter = ({ filter, getFilterValue, getName }) => (
  <>
    <p>Find contact by name</p>
    <input
    type="text"
    onChange={getName}
    value={filter}
    />
  </>
);

// const mapStateToProps = (state) => {
//   return {
//     // filter: state.filter
//   }
// }

const mapDispatchToProps = {
  getFilterValue: contactsActions.getFilterValue,
}
// Filter.propTypes = {
//   getName: PropTypes.func.isRequired
// };

export default connect(null, mapDispatchToProps)(Filter);