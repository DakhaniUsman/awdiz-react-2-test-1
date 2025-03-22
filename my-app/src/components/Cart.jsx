import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/slice/cartSlice";

const Cart = () => {
  const data = useSelector((state) => state.cart.products);
  console.log(data, "data");
  // const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));
  // console.log(dataFromLocalStorage);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart Page</h1>
      <div className="products-container">
        {data?.map((product, index) => (
          <div key={index} className="product-card">
            <h2>{product.name}</h2>
            <h3>Price : {product.price}</h3>
            <h3>Quantity : {product.quantity}</h3>
            <button
              className="btn"
              style={{ marginRight: "0px" }}
              onClick={(index)=>dispatch(removeProduct(index))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
