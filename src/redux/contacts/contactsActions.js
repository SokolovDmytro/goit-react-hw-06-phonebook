import { v4 as uuidv4 } from 'uuid';
import contactsConstans from './contactsConstans';

const addContact = contact => {
  return {
    type: contactsConstans.ADD_CONTACT,
    payload: {
      ...contact,
      id: uuidv4(),
    },
  };
};

const removeContact = id => {
  return {
    type: contactsConstans.REMOVE_CONTACT,
    payload: id,
  };
};

const getFilterValue = filter => {
  return {
    type: contactsConstans.FILTER_CONTACT,
    payload: filter,
  };
};

const existContact = () => {
  return {
    type: contactsConstans.EXIST_CONTACT,
  };
};

export default { addContact, removeContact, getFilterValue, existContact };
