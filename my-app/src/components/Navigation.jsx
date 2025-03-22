import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const data = useSelector((state) => state.cart.products);
  console.log(data, "data in nav");
  const router = useNavigate();
  return (
    <div className="navigations">
      <h3 onClick={() => router("/")}>Add Product</h3>
      <h3 onClick={() => router("/cart")}>
        Cart - <span>{data.length}</span>
      </h3>
    </div>
  );
};

export default Navigation;
