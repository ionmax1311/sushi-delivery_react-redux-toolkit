import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
    deliveryPrice: 0,
    isOrder: false,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;

      try {
        const exist = state.cart.find((product) => product.id === productId.id);
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            img: productId.img,
            amount: 1,
            text: productId.text,
            totalPrice: productId.price,
            name: productId.name,
          });

          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (error) {
        return error;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find((product) => product.id === productId.id);
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) => product.id !== productId.id
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
        if (!state.cart.length) {
          state.deliveryPrice = 0;
        }
      } catch (error) {
        return error;
      }
    },
    deliveryInCart(state, action) {
      state.deliveryPrice = action.payload;
    },
    clearCart(state, action) {
      state.cart.length = 0;
      state.isOrder = true;
      state.totalAmount = 0;
    },
    clearOrder(state, action) {
      state.isOrder = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  deliveryInCart,
  clearCart,
  clearOrder,
} = cartSlice.actions;
export default cartSlice.reducer;
