import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      console.log(state.items, "STATE.ITEMS");
      const index = state.items.findIndex(
        ({ info }) => info.id === action.payload.card.info.id
      );
      console.log(index, "Index");
      console.log(state.items[index], "Index");
      if (index < 0) {
        state.items.push({ ...action.payload.card });
        state.items[state.items.length - 1].info.quantity = 1;
      } else {
        state.items[index].info.quantity++;
      }

      console.log(state.items.length, "this is cart payload");
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
      if (index >= 0 && state.items[index].info.quantity > 1) {
        state.items[index].info.quantity--;
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
