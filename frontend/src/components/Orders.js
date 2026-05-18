import React, { useEffect, useState } from "react";
import "./Orders.css";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    // CURRENT LOGGED USER
    const currentUser =
      localStorage.getItem("loggedInUser");

    // ALL ORDERS
    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    // FILTER ONLY CURRENT USER ORDERS
    const userOrders = storedOrders.filter(
      (order) => order.user === currentUser
    );

    setOrders(userOrders);

  }, []);

  return (

    <div className="orders-container">

      <h1 className="orders-title">
        My Orders
      </h1>

      {orders.length === 0 ? (

        <h3>No Orders Yet</h3>

      ) : (

        orders.map((order, index) => (

          <div className="order-card" key={index}>

            <h3>
              Order #{index + 1}
            </h3>

            <p>
              User :
              <strong>
                {" "} {order.user}
              </strong>
            </p>

            <p>
              Payment :
              <strong>
                {" "} {order.payment}
              </strong>
            </p>

            <p>
              Time Slot :
              <strong>
                {" "} {order.timeSlot}
              </strong>
            </p>

            <p>
              Status :
              <strong>
                {" "} {order.status}
              </strong>
            </p>

            <p>
              Date :
              <strong>
                {" "} {order.date}
              </strong>
            </p>

            <hr />

            {order.items.map((item, i) => (

              <div
                className="order-item"
                key={i}
              >

                <h4>{item.food_name}</h4>

                <p>{item.subcategory}</p>

                <p>
                  ₹ {item.price}
                </p>

              </div>

            ))}

          </div>

        ))

      )}

    </div>
  );
}

export default Orders;