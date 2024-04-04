import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../state/filtersSlice";
import ticketsReducer from '../state/ticketsSlice'

export default configureStore({
  reducer: {
    filters: filterReducer,
    tickets:ticketsReducer
  },
});
