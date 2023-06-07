import React from 'react'


import styled from "styled-components"
function Nav() {
  return (
    
      <div className="header">
      
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Home</a>
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">About Us <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Contact</a>
      </li>  */}
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/">Action</a>
          <a class="dropdown-item" href="/">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/">Something else here</a>
        </div>
      </li> */}

     {/* </ul>
    <form class="form-inline my-5 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */}
    
    <Navbar className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">Logo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
    </Navbar>



    </div>
  )
}
const Navbar = styled.nav`
  background-color: #0047AB;
  height:12vh;
  
  .navbar-brand {
    color: white;
  }
  
  .nav-link {
    color: white;
  }
  .nav-link:a{
    color:grey;
  }
  .nav-item.active .nav-link {
    background-color: #6495ED;
  }
  
  .navbar-toggler-icon {
    background-color: #333;
  }
  
  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
    background-color: #fff;
  }
`;
export default Nav