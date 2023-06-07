import React from 'react'
import styled from "styled-components"
const element_style={
    fontSize:'2.5rem',
    color:'powderblue',
    textAlign:'center',
}
function Budget() {
  return (
   <Container>
    <FormContainer>
        <Form>
            <h1 style={element_style}>Create Budget</h1>
          <div className="form-group">
            <label htmlFor="budget">Budget Name</label>
            <input type="text" className="form-control" id="budget" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="number" className="form-control" id="amount" />
          </div>
          <div className="form-group">
            <label htmlFor="date1">Start Date</label>
            <input type="date" className="form-control" id="date1" />
          </div>
          <div className="form-group">
            <label htmlFor="date2">End Date</label>
            <input type="date" className="form-control" id="date2" />
          </div>
          <button type="submit" className="btn btn-primary">Add Budget</button>
        </Form>
      </FormContainer>
      
{/* 
    <FormContainer>
        <Form>
            <h1>Add New Expense</h1>
          <div className="form-group">
            <label htmlFor="expense">Expense Name</label>
            <input type="text" className="form-control" id="expense" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="number" className="form-control" id="amount" />
          </div>
          <button type="submit" className="btn btn-primary">Add Expense</button>
        </Form>
      </FormContainer>  */}
      </Container>
  )
}



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding 12px 32px;
`;

const FormContainer = styled.div`

margin:auto;

  width:60vh;
  padding:12px 32px;
  border-radius:12px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-bottom: 20px;
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-control {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    
    &:focus {
      outline: none;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    border-radius:12px;
    margin-bottom:4px;
    width:20vh;
    &:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
  }


`;
export default Budget
