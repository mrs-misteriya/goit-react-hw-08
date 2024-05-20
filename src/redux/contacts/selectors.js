import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts;
const selectContactItems = (state) => state.contacts.items;


export const selectFilteredContacts = createSelector([selectContactItems, selectNameFilter], (contacts, filterContacts ) => { return contacts.filter((contact) => contact.name.toLowerCase().includes(filterContacts.toLowerCase())) })