import React from "react";
import Logo from "../Assert/Brand logo.gif"
// import Logo from "../Assert/Brandlogo transp.png"


const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary " style={{backgroundColor : "#E97451"}}>
        <div class="container-fluid ">
          <a class="navbar-brand text-light" href="#" >
            <img src={Logo} alt="" srcset="" style={{width: "30px"}}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                Gallery
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
