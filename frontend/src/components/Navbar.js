import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container-fluid">

        <Link className="navbar-brand title" to="/">
          🍕🍔🍟Canteen Pre-Order System🍟🍔🍕
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/register">
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/menu">
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/cart">
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/orders">
                Orders
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;