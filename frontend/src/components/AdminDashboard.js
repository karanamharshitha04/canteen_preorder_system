import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(storedOrders);

  }, []);

  return (

    <div className="admin-container">

      <h1 className="admin-title">
        Admin Dashboard
      </h1>

      {orders.length === 0 ? (

        <h3>No Orders</h3>

      ) : (

        orders.map((order, index) => (

          <div className="admin-card" key={index}>

            <h3>
              Customer :
              {" "}
              {order.user}
            </h3>

            <p>
              Payment :
              {" "}
              {order.payment}
            </p>

            <p>
              Time Slot :
              {" "}
              {order.timeSlot}
            </p>

            <p>
              Status :
              {" "}
              {order.status}
            </p>

            <hr />

            {order.items.map((item, i) => (

              <div key={i}>

                <h4>
                  {item.food_name}
                </h4>

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

export default AdminDashboard;