import React from "react";
import { Innerlayout } from "../styles/Layout";
import Form from "../Form/Form";

function income() {
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form/>
            </div>
            <div className="incomes">
             
            </div>
        
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

export default income;
