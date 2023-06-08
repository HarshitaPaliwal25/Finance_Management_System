import "./App.css";
import Form from "./components/Form/Form";
import Budget from "./components/Budget/Budget";
import Expense from "./components/Expenses/Expense";
 import Saving from "./components/Savings/Saving";
 import Tax from "./components/Tax/Tax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Nav from "./components/Nav";
import { Mainlayout } from "./styles/Layout";
import "./styles/style.css";
//import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <div className="main">
        
        </div>
        <Nav />
 
      
      <div className="container">
          <BrowserRouter>
            
              <Routes>
                {/* <Route path="/" element={<Login />} /> */}

                <Route path="/Form" element={<Form />} />

                <Route path="/Expense" element={<Expense />} />
                <Route path="/Budget" element={<Budget />} />
                <Route path="/Saving" element={<Saving />} />
                <Route path="/Tax" element={<Tax />} />
              </Routes>
              
          </BrowserRouter> 
        </div>
        {/* <div className="container"></div> */}

          {/* <Budget/> */}
          {/* <Form/> */}
          {/* <Expense/> */}
        

        <Mainlayout />
      </div>
    </>
  );
}

export default App;
