import CURRENCY_INTERFACE from "@/constants/notification";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface currencyState {
  selectedCurrency: CURRENCY_INTERFACE;
}

// Get initial currency from localStorage or use default
const getInitialCurrency = (): CURRENCY_INTERFACE => {
  if (typeof window !== "undefined") {
    const savedCurrency = localStorage.getItem("selectedCurrency");
    if (savedCurrency) {
      return JSON.parse(savedCurrency);
    }
  }
  return {
    name: "USD",
    symbol: "$",
  };
};

const initialState: currencyState = {
  selectedCurrency: getInitialCurrency(),
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<CURRENCY_INTERFACE>) => {
      state.selectedCurrency = action.payload;
      // Save to localStorage when currency changes
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "selectedCurrency",
          JSON.stringify(action.payload)
        );
      }
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
