import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../state/state";


export default configureStore({
  reducer: {
    filters: filterReducer,
  },
});
