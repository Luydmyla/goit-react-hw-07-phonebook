import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterSlice } from './filterSlice';
import { contactsApi } from './itemsSlice';

// створюю сховище стор , яке зберігає стан нашого додатку та методи роботи з ним (редюсери) -функціі, які реагують на дії
export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // додаемо функціі npослойки з дефолтними значенням та з нашого contactsApi
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
