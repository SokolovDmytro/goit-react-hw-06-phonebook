import { combineReducers } from 'redux';
import contactsConstans from './contactsConstans';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case contactsConstans.ADD_CONTACT:
      return [...state, action.payload];

    case contactsConstans.REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case contactsConstans.FILTER_CONTACT:
      return action.payload;

    default:
      return state;
  }
};

const alertReducer = (state = false, action) => {
  switch (action.type) {
    case contactsConstans.EXIST_CONTACT:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  alert: alertReducer,
});
