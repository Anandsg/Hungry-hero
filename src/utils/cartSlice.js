import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const index = state.items.findIndex(
        ({ info }) => info.id === action.payload.card.info.id
      );
      if (index < 0) {
        let data = { ...action.payload.card, info: { ...action.payload.card.info, quantity: 1 } };
        state.items.push(data)
       } else {
        state.items[index].info.quantity++;
      }

    },
    increaseQuantity: (state, action) => {
      const index = state.items.findIndex(
        ({ info }) => info.id === action.payload
      );
      if (index >= 0) {
        state.items[index].info.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.items.findIndex(
        ({ info }) => info.id === action.payload
      );
      if (index >= 0 && state.items[index].info.quantity >= 1) {
        state.items[index].info.quantity--;

        if (state.items[index].info.quantity == 0) {
          // state.items[index].info.quantity--;
          state.items.splice(index, 1);
          // removeItem(state,action)
        }
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        ({ info }) => info.id === action.payload
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
