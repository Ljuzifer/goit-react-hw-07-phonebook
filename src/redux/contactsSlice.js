import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import { fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      // state.items.push(payload);
      // return [...state, action.payload];
      return { ...state, items: [...state.items, payload] };
    },

    deleteContact: (state, { payload }) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      console.log(payload);
    }),
});

// export const persistConfig = {
//   key: 'contacts-list',
//   storage,
//   whitelist: ['contacts.items'],
// };

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
