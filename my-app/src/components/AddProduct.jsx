import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slice/cartSlice";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: 1,
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!product.name || product.price < 0 || product.quantity <= 0) {
      alert("Please enter valid product details");
      return;
    }

    dispatch(
      addProduct({
        id: Date.now(),
        ...product,
      })
    );

    setProduct({name : "", price : "", quantity : 1})
  };
  return (
    <div>
      <h1>Add Products Page</h1>

      <div>
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={product.name}
            className="input-field"
            placeholder="Product name"
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="price"
            value={product.price}
            className="input-field"
            placeholder="Product price"
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            className="input-field"
            placeholder="Product quantity"
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="btn">
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
