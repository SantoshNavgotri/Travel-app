import { configureStore } from "@reduxjs/toolkit";
import root from "./Combine";

const store = configureStore({
  reducer: root,
});

export default store;