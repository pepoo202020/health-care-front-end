import CURRENCY_INTERFACE from "@/constants/notification";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface currencyState {
  selectedCurrency: CURRENCY_INTERFACE;
}

const initialState: currencyState = {
  selectedCurrency: {
    name: "USD",
    symbol: "$",
  },
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<CURRENCY_INTERFACE>) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
