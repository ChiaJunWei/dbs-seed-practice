// import {configureStore} from "@reduxjs/toolkit";
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import temploginReducer from "./temploginSlice";
import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const rootReducer = combineReducers({
    user: userReducer,
    templogin:temploginReducer
    
  });

  const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
    blacklist: ['templogin'], //blacklisting a store attribute name, will not persist that store attribute.
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
    reducer: persistedReducer,
    // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
    middleware: getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    });

export const persistor = persistStore(store);
export default store;
