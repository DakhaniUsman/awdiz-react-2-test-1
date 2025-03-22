import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [{ id: Date.now(), name: "Product A", price: 100, quantity: 2 }],
    totalPrice: 200,
  },
  reducers: {
    addProduct: (state,action) => {
        state.products = [...state.products,action.payload];
        console.log(state.products);
        localStorage.setItem("data",JSON.stringify(state.products))

    },
    removeProdcut: () => {},
    updateQuantity: () => {},
    calculateTotal: () => {},
  },
});


export const { addProduct, removeProdcut, updateQuantity, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
