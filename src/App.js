import './App.css';
import Form from './Form/Form';
//import Budget from './components/Budget/Budget';
//import Expense from './components/Expenses/Expense';

import Header from './components/Header';
import Nav from './components/Nav';
//import IncomeItem from './incomes/IncomeItem';

import { Mainlayout } from './styles/Layout';
import './styles/style.css';

function App() {
  
  return (
    <>
    <div className="App">
    <div className="main">
        <Header/>
      </div>
      <Nav/>
      
    
      <div className="container">
      {/* <Budget/> */}
      <Form/>
      {/* <Expense/> */}
      </div>
      
   <Mainlayout/>
  
    </div>
    
     </>
  );
}

export default App;
