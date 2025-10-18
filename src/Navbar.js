import React from "react";

function Navbar() {
  return (
   
      <nav class="navbar navbar-expand-lg border-bottom p-3"  style={{backgroundColor: "#ffff"}}>
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            <img src="images/logo.svg" alt= "logo" style={{width: "25%"}}/>
          </a>
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
                <a class="nav-link active" aria-current="page" href="#">
                    Sign Up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                    About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                    Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                    Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                    Support
                </a>
              </li>
              
                
            </ul>
            </form>
          </div>
        </div>
      </nav>
  
  );
}

export default Navbar;
