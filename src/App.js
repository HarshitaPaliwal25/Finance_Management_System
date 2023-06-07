import "./App.css";
import Form from "./Form/Form";
import Budget from "./components/Budget/Budget";
 import Expense from "./components/Expenses/Expense";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";

import { Mainlayout } from "./styles/Layout";
import "./styles/style.css";
//import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <div className="main">
          <Header />
        </div>
        <Nav />
  <div className="container">
      

          <BrowserRouter>
      
              <Routes>
                {/* <Route path="/" element={<Login />} /> */}

                <Route path="/Form" element={<Form />} />

                <Route path="/Expense" element={<Expense />} />
                <Route path="/Budget" element={<Budget />} />
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
