// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// ВИКОРИСТОВУЄМО БІБЛІОТЕКУ персіст для роботи з локалсторидж
// import { persistStore, persistReducer } from 'redux-persist';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import { createReducer, createAction } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { itemsSlice } from '../redux/itemsSlice';
import { filterSlice } from './filterSlice';
// конфігурація персисту
const persistConfig = {
  key: 'root',
  storage,
};

// створюю дїї (action) для додавання, видалення та пошуку контактів
export const addItems = createAction('items/addItems');
export const deleteItems = createAction('items/deleteItems');
export const updateFilter = createAction('filter/updateFilter');

//ДВА ВАРІНТИ - ЧЕРЕЗ createReducer - (ЗАКОМЕНТОВАНО)
// І ЧЕРЕЗ Slice

// створюю редюсер , який приймає стейт айтемс(контакти) і дії над ним та повертає новий стейт
// const itemsReducer = createReducer(initialContacts, {
//   // функція для додавання нового контакту за іменем та номером
//   [addItems]: (state, action) => {
//     const { name, number } = action.payload;
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     if (state.some(contact => contact.name === name)) {
//       return alert(`${contact.name} is already in contacts`);
//     }
//     // тут редакс використовує бібліотеку Іммер, яка дозволяє(під капотом) пушити новий контакт не мутіруючи старий масив
//     state.push(contact);
//   },
//   // функція для видалення контакту за його айді
//   [deleteItems]: (state, action) => {
//     const contactId = action.payload;
//     return state.filter(contact => contact.id !== contactId);
//   },
// });

// створюю редюсер , який приймає стейт фільтер і дії над ним та повертає новий стейт
// const filterReducer = createReducer('', {
//   // функція для пошуку контакту за фільтром
//   [updateFilter]: (state, action) => action.payload,
// });
// створюємо персист редюсер для айтемсів, який звязаний з локал сториджем
const persistedItemsReducer = persistReducer(persistConfig, itemsSlice.reducer);

// створюю сховище стор , яке зберігає стан нашого додатку та методи роботи з ним (редюсери) -функціі, які реагують на дії
export const store = configureStore({
  reducer: {
    // items: itemsReducer,
    // items: itemsSlice.reducer,
    items: persistedItemsReducer,
    // filter: filterReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
