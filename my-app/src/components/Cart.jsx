import React from 'react'

const Cart = () => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));
    console.log(dataFromLocalStorage);
  return (
    <div>
        <h1>Cart Page</h1>
        <div className='products-container'>
            {dataFromLocalStorage.map((product,index)=>(
                <div className='product-card'>
                    <h2>{product.name}</h2>
                    <h3>Price : {product.price}</h3>
                    <h3>Price : {product.quantity}</h3>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Cart