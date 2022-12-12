import { contactsReducer } from './slice/contactsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: { contacts: persistedReducer },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
