import React from "react";

import styled from "styled-components";
function Nav() {
  return (
    <div className="header">
      <Navbar className="navbar navbar-expand-lg navbar-dark">
        {/* <a className="navbar-brand" href="/">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > */}
          {/* <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
}
const Navbar = styled.nav`
  background-color: #0047ab;
  height: 12vh;

  .navbar-brand {
    color: white;
  }

  .nav-link {
    color: white;
  }
  .nav-link:a {
    color: grey;
  }
  .nav-item.active .nav-link {
    background-color: #6495ed;
  }

  .navbar-toggler-icon {
    background-color: #333;
  }

  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
    background-color: #fff;
  }
`;
export default Nav;
