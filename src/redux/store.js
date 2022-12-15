import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers } from "redux";


const persistConfig = {
  key: 'root',
  storage,
}
const reducer = combineReducers({
  userReducer  // not persisting this reducer
});
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store)
