import { configureStore } from '@reduxjs/toolkit'
import launchesReducer from "./launches";

const store = configureStore({
  reducer: {launches: launchesReducer}
});

export default store;
