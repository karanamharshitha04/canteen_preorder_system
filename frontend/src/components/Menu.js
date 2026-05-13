import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Menu.css";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchFoods();

    // Load cart from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

  }, []);

  const fetchFoods = async () => {
    try {
      const res = await axios.get("http://localhost:5000/menu");

      setFoods(res.data);

      if (res.data.length > 0) {
        setSelectedCategory(res.data[0].category);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
    ...new Set(foods.map((food) => food.category?.trim()))
  ];

  const filteredFoods = foods.filter(
    (food) => food.category === selectedCategory
  );

  // ADD TO CART
  const addToCart = (food) => {

    const updatedCart = [...cart, food];

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${food.food_name} added to cart`);
  };

  // Images
  const getFoodImage = (category) => {

    switch (category) {

      case "Burger":
        return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd";

      case "Pizza":
        return "https://images.unsplash.com/photo-1513104890138-7c749659a591";

      case "Juice":
        return "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b";

      case "Dosa":
        return "https://images.unsplash.com/photo-1668236543090-82eba5ee5976";

      case "Idly":
        return "https://images.unsplash.com/photo-1630383249896-424e482df921";

      case "Coffee":
        return "https://images.unsplash.com/photo-1509042239860-f550ce710b93";

      case "Tea":
        return "https://images.unsplash.com/photo-1544787219-7f47ccb76574";

      case "Rice":
        return "https://images.unsplash.com/photo-1603133872878-684f208fb84b";

      case "Noodles":
        return "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841";

      case "Snacks":
        return "https://images.unsplash.com/photo-1599490659213-e2b9527bd087";

      default:
        return "https://images.unsplash.com/photo-1504674900247-0877df9cc836";
    }
  };

  return (
    <div className="menu-container">

      {/* LEFT SIDE */}
      <div className="sidebar">

        <h2>Categories</h2>

        {categories.map((category, index) => (

          <button
            key={index}
            className={`category-btn ${
              selectedCategory === category
                ? "active-category"
                : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>

      {/* RIGHT SIDE */}
      <div className="food-section">

        <h2 className="category-title">
          {selectedCategory}
        </h2>

        <div className="food-grid">

          {filteredFoods.map((food) => (

            <div className="food-card" key={food.id}>

              <img
                src={getFoodImage(food.category)}
                alt={food.food_name}
                className="food-image"
              />

              <h3 className="food-name">
                {food.food_name}
              </h3>

              {food.subcategory && (
                <p className="subcategory">
                  {food.subcategory}
                </p>
              )}

              <p className="price">
                ₹ {food.price}
              </p>

              <button
                className="cart-btn"
                onClick={() => addToCart(food)}
              >
                Add To Cart
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Menu;











