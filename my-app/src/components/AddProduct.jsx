//

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();
  const router = useNavigate();

  const [newProduct, setNewProduct] = useState({
    id: Date.now(),
    name: "",
    price: null,
    quantity: null,
  });

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(newProduct));
    alert(`${newProduct.name}`);
    setNewProduct({
      id: Date.now(),
      name: "",
      price: "",
      quantity: "",
    });
    // router("/cart")
  };
  return (
    <div style={{width : "100%"}}>
      <h1>Add Product Page</h1>

      <form action="" className="input-form" onSubmit={handleSubmit}>
    
        <input
          type="text"
          value={newProduct.name}
          placeholder="Product name"
          className="input-field"
          name="name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={newProduct.price}
          placeholder="Product price"
          className="input-field"
          name="price"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={newProduct.quantity}
          placeholder="Product quantity"
          className="input-field"
          name="quantity"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default AddProduct;
