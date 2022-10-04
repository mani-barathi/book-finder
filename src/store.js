import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import counterReducer from "./reducers/counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
