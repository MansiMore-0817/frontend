import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
   
      <nav class="navbar navbar-expand-lg border-bottom p-3"  style={{backgroundColor: "#ffff"}}>
        <div class="container-fluid ">
          <Link class="navbar-brand" to="/">
            <img src="images/newLogo.png" alt= "logo" style={{width: "45%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            
            <form class="d-flex " role="search">
                <ul class="navbar-nav mb-2 mb-lg-0" style={{ paddingRight: "40px" }}>
              <li class="nav-item">
                <Link class="nav-link active" to="/login">
                    Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                    Sign Up
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                    About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/products">
                    Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                    Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                    Support
                </Link>
              </li>
              
                
            </ul>
            </form>
          </div>
        </div>
      </nav>
  
  );
}

export default Navbar;
