import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from "@reduxjs/toolkit";

import {contactsReduser} from '../redux/contactFormSlice';
import {filterReducer} from './filterSlice';
import { authReducer } from './auth/auth-slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReduser,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);