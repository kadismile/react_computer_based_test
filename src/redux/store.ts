import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import questionsReducer from "./questionSlice";


const rootReducer = combineReducers({
  questions: questionsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["questions"],
};


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions:["persist/PERSIST"]
    }
  })
});

const persistor = persistStore(store)
export  { store, persistor };