import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeProduct, updateQuantity } from '../redux/slice/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();

    const cart = useSelector((state)=> state.cart);
    console.log(cart)
  return (
    <div>
        <h1>Cart Page</h1>
        {cart.products.length=== 0 ? (
            <h2>Cart is Empty..</h2>
        ) : (
            <div>
                <div className='products-container'>
                {cart.products.map((product,index)=> (
                    <div key={index} className='product-card'>
                        <h3>{product.name}</h3>
                        <p>Price : <b>₹{product.price}</b></p>
                        <p>Quantity : <b>{product.quantity}</b></p>

                        <button className='btn' onClick={()=> dispatch(updateQuantity({id : product.id, quantity : product.quantity + 1}))}>➕</button>
                        <button className='btn' onClick={()=> dispatch(updateQuantity({id : product.id, quantity : product.quantity - 1}))} disabled={product.quantity <= 1}>➖</button>

                        <button className='btn' onClick={()=> dispatch(removeProduct(product.id))}>🗑️</button>

                    

                    </div>
                    ))}
                </div>
                <div>
                    <h3>Total Price : <b>₹{cart.totalPrice}</b></h3>

                    <button className='btn' onClick={()=> dispatch(clearCart())}>Checkout ✅</button>
                </div>
            </div>
        ) }



    </div>
  )
}

export default Cart