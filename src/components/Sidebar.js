import React, { useState } from 'react';
import styled from 'styled-components';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Form",
            name:"Incomes",
            icon:<FaUserAlt/>
        },
        {
            path:"/Expense",
            name:"Expense",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Budget",
            name:"Budget",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <Sidestyled>
        <div className="leftcontainer">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </Sidestyled>
    );
};
const Sidestyled= styled.div`
body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline;
    justify-content: left;
    align-items: center;
    min-height: 100vh;
    margin: 0%;
 padding: 20px 15px; 
    background-position:left;
    background-color:black;
      
  }
  .Link{
    display: inline;
    color: aqua;
    padding: 10px 15px;
    
  }
  div {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .container-2{
      display: inline;
      justify-content: center;
      align-items: center;
  }
  .mb3{
    display:'inline';
    justify-content: 'center';
    align-items:'center';
    background-color: #0d5317a8;
    text-decoration: solid;
    text-align: center;
  }
  
`;
export default Sidebar;



 
