import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    value: {
      all: false,
      noTransfers: false,
      oneTransfer: false,
      twoTransfers: false,
      threeTransfers: false,
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
      const setVal = (state) => {
        const { oneTransfer, twoTransfers, threeTransfers, noTransfers } =
          state.value;

        console.log(oneTransfer, twoTransfers, threeTransfers, noTransfers);

        if (!oneTransfer || !twoTransfers || !threeTransfers || !noTransfers) {
          return false;
        }

        if (oneTransfer && twoTransfers && threeTransfers && noTransfers) {
          return true;
        }
      };

     /*  switch (action.payload) {
        case "oneTransfer":
          state.value = {
            ...state.value,
            oneTransfer: !state.value.oneTransfer,
          };

          state.value = {
            ...state.value,
            all: setVal(state),
          };
          break;
        default:
          return state.value;
      } */

      const updateProp = (payload) => {
        state.value = {
            ...state.value,
            [payload]:!state.value[payload]
        }
        state.value = {
            ...state.value,
            all: setVal(state),
          };
      }

      updateProp(action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { allActive, oneActive } = filterSlice.actions;

export default filterSlice.reducer;
