import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products", { withCredentials: true })
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cart", { withCredentials: true })
      .then((response) => setCart(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addToCart = (productId, quantity) => {
    axios
      .post(
        "http://localhost:5000/cart",
        { productId, quantity },
        { withCredentials: true }
      )
      .then((response) => {
        setCart(response.data);
        toast.success("Added to cart!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to add to cart");
      });
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product.id, 1)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h1>Cart</h1>
      <div className="cart">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
