import { ProductIF } from "@/constants/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: ProductIF[];
}

const getInitialWishlist = (): ProductIF[] => {
  if (typeof window !== "undefined") {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      return JSON.parse(storedWishlist);
    }
  }
  return [];
};

const initialState: WishlistState = {
  items: getInitialWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductIF>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.items));
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
    clearWishlist: (state) => {
      state.items = [];
      localStorage.setItem("wishlist", JSON.stringify([]));
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
