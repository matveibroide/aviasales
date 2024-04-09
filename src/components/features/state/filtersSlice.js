import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    value: {
      all: true,
      noTransfers: true,
      oneTransfer: true,
      twoTransfers: true,
      threeTransfers: true,
    },
    value2: {
      filterPrice: false,
      filterSpeed: false,
    },
  },
  reducers: {
    allActive: (state, action) => {
      if (action.payload === true) {
        state.value = {
          ...state.value,
          all: true,
          noTransfers: true,
          oneTransfer: true,
          twoTransfers: true,
          threeTransfers: true,
        };

        state.value2 = {
          filterSpeed: false,
          filterPrice: false,
        };
      } else {
        state.value = {
          ...state.value,
          all: false,
          noTransfers: false,
          oneTransfer: false,
          twoTransfers: false,
          threeTransfers: false,
        };
      }
    },
    oneActive: (state, action) => {
      state.value2 = {
        filterSpeed: false,
        filterPrice: false,
      };
      const setVal = (state) => {
        const { oneTransfer, twoTransfers, threeTransfers, noTransfers } =
          state.value;

        if (!oneTransfer || !twoTransfers || !threeTransfers || !noTransfers) {
          return false;
        }

        if (oneTransfer && twoTransfers && threeTransfers && noTransfers) {
          return true;
        }
      };

      const updateProp = (payload) => {
        state.value = {
          ...state.value,
          [payload]: !state.value[payload],
        };
        state.value = {
          ...state.value,
          all: setVal(state),
        };
      };

      updateProp(action.payload);
    },
    changeSpeedFilter: (state, action) => {
      state.value = {
        ...state.value,
        all: false,
        noTransfers: false,
        oneTransfer: false,
        twoTransfers: false,
        threeTransfers: false,
      };
      state.value2.filterSpeed = !state.value2.filterSpeed;
      console.log(state.value2.filterSpeed);
    },
    changePriceFilter: (state, action) => {
      state.value = {
        ...state.value,
        all: false,
        noTransfers: false,
        oneTransfer: false,
        twoTransfers: false,
        threeTransfers: false,
      };
      state.value2.filterPrice = !state.value2.filterPrice;
      console.log(state.value2.filterPrice);
    },
  },
});

// Action creators are generated for each case reducer function
export const { allActive, oneActive, changeSpeedFilter, changePriceFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
