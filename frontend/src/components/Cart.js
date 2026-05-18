import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(storedCart);

  }, []);

  // REMOVE ITEM
  const removeItem = (index) => {

    const updatedCart = cartItems.filter(
      (_, i) => i !== index
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  // PAYMENT PAGE
  const goToPayment = () => {

    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    window.location.href = "/payment";
  };

  return (

    <div className="cart-container">

      <h1 className="cart-title">
        My Cart
      </h1>

      {cartItems.length === 0 ? (

        <h3>Your cart is empty</h3>

      ) : (

        <>

          {cartItems.map((item, index) => (

            <div className="cart-card" key={index}>

              <div>

                <h3>{item.food_name}</h3>

                <p>{item.subcategory}</p>

                <h4>₹ {item.price}</h4>

              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>

            </div>

          ))}

          <h2 className="total-price">
            Total : ₹ {totalPrice}
          </h2>

          <button
            className="payment-btn"
            onClick={goToPayment}
          >
            Proceed To Payment
          </button>

        </>

      )}

    </div>
  );
}

export default Cart;