import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import { fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
  console.log(action.payload);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContact: (state, { payload }) => {
  //     // state.items.push(payload);
  //     // return [...state, action.payload];
  //     return { ...state, items: [...state.items, payload] };
  //   },

  //   deleteContact: (state, { payload }) => {
  //     return {
  //       ...state,
  //       items: state.items.filter(item => item.id !== payload),
  //     };
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected);
  },
});

// export const persistConfig = {
//   key: 'contacts-list',
//   storage,
//   whitelist: ['contacts.items'],
// };

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
