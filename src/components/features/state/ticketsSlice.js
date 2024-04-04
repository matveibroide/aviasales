import { createSlice } from "@reduxjs/toolkit";

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    searchId: null,
    tickets: [],
  },
  reducers: {
    setSearchId: (state, action) => {
      console.log(action.payload)
      state.searchId = action.payload;
    },
    setTickets: (state, action) => {
      if (action.payload instanceof Error) {
        console.log('I got error')
      }
      state.tickets = [...state.tickets, ...action.payload];
    },
  
  },
});

const getSearchId = async () => {
  const res = await fetch("https://aviasales-test-api.kata.academy/search");

  if (!res.ok) {
    throw new Error(`Failed to fetch received searchId ${res.status}`);
  } else {
    return await res.json();
  }
};

const getTickets = async (id) => {
  const res = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch tickets received ${res.status}`);
  } else {
    return res.json();
  }
};

export const { setSearchId, setTickets } = ticketsSlice.actions;
export { getSearchId, getTickets };
export default ticketsSlice.reducer;
