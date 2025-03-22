import { createSlice } from "@reduxjs/toolkit";

const getDataLocalstorage = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  return data;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: getDataLocalstorage(),
    totalPrice: 200,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
      console.log(state.products, "state.products");
      localStorage.setItem("data", JSON.stringify(state.products));
    },
    removeProduct: (state,index) => {
        // const products = state.products;
        state.products.filter((_,i)=>i!== index);
        // console.log(state.products)
    },
    updateQuantity: () => {},
    calculateTotal: () => {},
  },
});

export const { addProduct, removeProduct, updateQuantity, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
