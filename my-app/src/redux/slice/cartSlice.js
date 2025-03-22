import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { products : [], totalPrice : 0};
}

const initialState = loadCartFromLocalStorage;

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addProduct : (state,action)=>{
            const {id, name, price, quantity} = action.payload;

            const existingProduct = state.products.find((product)=> product.name === name);

            if (existingProduct){
                existingProduct.quantity+= quantity
            } else {
                state.products.push({id, name, price, quantity});   
            }

            cartSlice.caseReducers.calculateTotal(state)
            saveCartToLocalStorage(state);
            

        },
        removeProduct : (state,action)=> {
            state.products = state.products.filter((product)=> product.id !== action.payload );


            cartSlice.caseReducers.calculateTotal(state);
            saveCartToLocalStorage(state)
        },
        updateQuantity : (state, action)=> {
            const {id, quantity} = action.payload;

            const product = state.products.find((product)=> product.id === id );

            if (product){
                product.quantity = Math.max(1, quantity);
            }

            cartSlice.caseReducers.calculateTotal(state)
            saveCartToLocalStorage(state);
        },
        calculateTotal : (state)=>{
            state.totalPrice = state.products.reduce((total, product)=>total + product.price * product.quantity, 0)
        },
        clearCart : (state)=>{
            state.products = [];
            state.totalPrice = 0;
            saveCartToLocalStorage(state);
        }
    }
})

const saveCartToLocalStorage = (state) => {
    localStorage.setItem("cart", JSON.stringify(state))
}

export const {addProduct,removeProduct,updateQuantity,calculateTotal, clearCart} = cartSlice.actions;
export default cartSlice.reducer;