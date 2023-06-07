import React from 'react'
//import images from "./images/flag.jpg";
import styled from "styled-components"
function Header() {
  return (
    <HeaderContainer>
    <div className="main">
      {/* <img src={images} alt="flag"/>  */}
      
    </div>
    </HeaderContainer>
    
  )
}
const HeaderContainer=styled.div`

   .main{
    height:15vh;
    background-color:#E0FFFF;
    width:auto;
   }
   
`;
export default Header
