import { getAllByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";

let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiX2lkIjoiNjI5MzVmYzdjMDE4MTJiMmY0OTYyNmFlIiwiaWF0IjoxNjUzODI1NDc5LCJleHAiOjE2NTM5MTE4Nzl9.rwYR6WwRQN6tC6VWijL7_UIbNq3nZUgIibPdpWNfZa0";
const headers = {
  Accept: "Application/json",
  Authorization: token,
};
const ShopCart = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`http://127.0.0.1:8000/`);
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <img src={product.banner} alt="" />
                  <div className="product-like">
                    {/* <label>{count}</label> <br /> */}
                    {/* <i className='fa-regular fa-heart' onClick={increment}></i> */}
                  </div>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>${product.price}.00 </h4>
                    {/* step : 3  
                       if hami le button ma click garryo bahne 
                      */}

                    <button
                      onClick={(event) => {
                        {
                          alert("Product Added Successfully ", product.name);
                        }

                        fetch(`http://127.0.0.1:8000/wishlist`, {
                          method: "PUT",
                          headers: {
                            ...headers,
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ _id: product._id }),
                        }).then(function (response) {
                          console.log(response);
                          return response.json();
                        });
                      }}
                    >
                      <i className="fa fa-heart"></i>
                    </button>

                    <button
                      onClick={(event) => {
                        fetch(`http://127.0.0.1:8000/cart`, {
                          method: "PUT",
                          headers: {
                            ...headers,
                            "Content-Type": "application/json",
                          },

                          body: JSON.stringify({ _id: product._id, qty: "1" }),
                        }).then(function (response) {
                          console.log(response);
                          return response.json();
                        });
                      }}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ShopCart;
