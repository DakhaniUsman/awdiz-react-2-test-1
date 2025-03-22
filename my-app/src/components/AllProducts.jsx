// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const AllProducts = () => {
//   const [data, setData] = useState([]);
//   const [dataFetched, setDataFetched] = useState(false);
//   const dataFromRedux = useSelector((state)=>state.cart.products);

// //   console.log(dataFromRedux,"dataFromRedux")
// console.log(data);
// //   console.log(dataFromRedux)


//   const router = useNavigate();



//   const [allProducts,setAllProducts] = useState([
//     {
//       id: 1,
//       name: "Product A",
//       price: 100,
//       quantity: 2,
//     },
//     {
//       id: 2,
//       name: "Product B",
//       price: 100,
//       quantity: 3,
//     },
//     {
//       id: 3,
//       name: "Product C",
//       price: 100,
//       quantity: 3,
//     },
//     {
//         id : 4,
//         name : "product d",
//         price : 200,
//         quantity : 1
//     },{
//         id : 5,
//         name : "product d",
//         price : 200,
//         quantity : 1
//     }
//   ]);

//   useEffect(()=>{
//     localStorage.setItem("data",JSON.stringify(allProducts))
//   },[allProducts])



//   const getDataFromStorage = JSON.parse(localStorage.getItem("data"))
// //   console.log(getDataFromStorage,"getDataFromStorage");


// //   setData(getDataFromStorage)




//   const AddProductPage = ()=>{
//     router("/add-product")
//   }
//   const CartPage = ()=>{
//     router("/cart")
//   }


//   useEffect(()=>{
//     if(dataFromRedux){
//         setData(dataFromRedux);
//         console.log(data,"data");
//         setDataFetched(true);
//         console.log("fethcing")
//     }
//   },[dataFromRedux,allProducts])


//   return (
//     <div>
//       <h1>All Products</h1>

//       <button className="btn" onClick={AddProductPage}>Add Product</button>
//       <button className="btn" onClick={CartPage}>Cart</button>

// {dataFetched ? ( <div
//         className="products-container"
//         style={{
//           width: "100%",
//           minHeight: "100%",
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {data.map((product, index) => (
//           <div
//             key={index}
//             className="product-card"
//             style={{
//               minWidth: "350px",
//               height: "200px",
//               boxShadow: "0px 0px 10px #aaa",
//               borderRadius: "20px",
//             }}
//           >
//             <p>Product No. {product.id}</p>
//             <h2>{product.name}</h2>
//             <p>{product.price}</p>
//             <p>{product.quantity}</p>
//           </div>
//         ))}
//       </div>) : (
//         <h1>Loading</h1>
//       )}


//     </div>
//   );
// };

// export default AllProducts;


// // import React, { useState } from 'react'

// // const AllProducts = () => {
// //    const [data,setData] = useState()

// //    let localData = JSON.parse(localStorage.getItem("data"));

// //    console.log(localData)

// //   console.log(data)
// //   return (
// //     <div>{localData.map((item)=>(<>
// //     <div id={item.id}>
// //         {item.id}
// //     </div>
// //     </>))}</div>
// //   )
// // }

// // export default AllProducts
