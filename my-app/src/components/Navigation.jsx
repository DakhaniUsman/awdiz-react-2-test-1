import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    const router = useNavigate();
  return (
    <div className='navigations'>
        <h3 onClick={()=> router("/add-product")}>Add Product</h3>
        <h3 onClick={()=> router("/cart")}>Cart</h3>
    </div>
  )
}

export default Navigation