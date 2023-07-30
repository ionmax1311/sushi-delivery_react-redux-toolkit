import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
