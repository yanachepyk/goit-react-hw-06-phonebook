import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setContactsFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, setContactsFilter } =
  contactSlice.actions;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
