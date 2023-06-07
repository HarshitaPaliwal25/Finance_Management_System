import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
const AlertStyled = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

const elementStyle = {
  fontSize: "2.5rem",
  color: "powderblue",
  textAlign: "center",
};

function Form() {
  const [tableData, setTableData] = useState([]);
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const handleOnChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post("", inputState)
        .then((response) => {
          setTableData((prev) => [...prev, inputState]);

          console.log("Form Submitted:", inputState);

          setInputState({
            title: "",
            amount: "",
            date: "",
            category: "",
            description: "",
          });
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    } else {
      setShowAlert(true);
    }
  };

  const validateForm = () => {
    const { title, amount, date, category, description } = inputState;

    if (
      title.trim() === "" ||
      amount.trim() === "" ||
      date.trim() === "" ||
      category.trim() === "" ||
      description.trim() === ""
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className="form">
      <h1 style={elementStyle}>Incomes</h1>
      {showAlert && (
        <AlertStyled>
          Please fill in all the fields before submitting!!
        </AlertStyled>
      )}
      <FormStyled onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            value={inputState.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="Amount"
            value={inputState.amount}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            placeholder="Date"
            value={inputState.date}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={inputState.category}
            onChange={handleOnChange}
          >
            <option value="">Select options</option>
            <option value="salary">Salary</option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investment">Investment</option>
            <option value="bank">Bank</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Description</label>
          <textarea
            className="form-control"
            id="textarea"
            rows="3"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {/* <Button
      name={'Add Income'}
      bPad={'.8rem 1.6rem'}
      brad={'30px'}
      bg={'var(--color-accent'}
      color={'#fff'}/> */}
      </FormStyled>

      <table className="table my-15">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((user, index) => (
            <tr key={index}>
              <td>{user.title}</td>
              <td>{user.amount}</td>
              <td>{user.date}</td>
              <td>{user.category}</td>
              <td>{user.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 15px;
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
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    border-radius: 12px;
    margin-bottom: 4px;
    width: 20vh;
    &:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
  }
`;
export default Form;

// import React from "react";
// import styled from "styled-components";
// import { useState } from "react";

// const elementStyle = {
//   fontSize: "2.5rem",
//   color: "powderblue",
//   textAlign: "center",
// };

// function Form() {
//   const [tableData, setTableData] = useState([]);
//   const [inputState, setInputState] = useState({
//     title: "",
//     amount: "",
//     date: "",
//     category: "",
//     description: "",
//   });

//   const handleOnChange = (event) => {
//     setInputState({ ...inputState, [event.target.name]: event.target.value });
//   };

//   const handleOnSubmit = (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       setTableData((prev) => [...prev, inputState]);

//       console.log("Form Submitted:", inputState);

//       setInputState({
//         title: "",
//         amount: "",
//         date: "",
//         category: "",
//         description: "",
//       });
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   const validateForm = () => {
//     const { title, amount, date, category, description } = inputState;

//     if (
//       title.trim() === "" ||
//       amount.trim() === "" ||
//       date.trim() === "" ||
//       category.trim() === "" ||
//       description.trim() === ""
//     ) {
//       return false;
//     }

//     return true;
//   };

//   return (
//     <div className="form">
//       <h1 style={elementStyle}>Incomes</h1>
//       <FormStyled onSubmit={handleOnSubmit}>
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             className="form-control"
//             id="title"
//             name="title"
//             placeholder="Title"
//             value={inputState.title}
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="amount">Amount</label>
//           <input
//             type="number"
//             className="form-control"
//             id="amount"
//             name="amount"
//             placeholder="Amount"
//             value={inputState.amount}
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="date">Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="date"
//             name="date"
//             placeholder="Date"
//             value={inputState.date}
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="category">Category</label>
//           <select
//             className="form-control"
//             id="category"
//             name="category"
//             value={inputState.category}
//             onChange={handleOnChange}
//           >
//             <option value="">Select options</option>
//             <option value="salary">Salary</option>
//             <option value="freelancing">Freelancing</option>
//             <option value="investment">Investment</option>
//             <option value="bank">Bank</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="textarea">Description</label>
//           <textarea
//             className="form-control"
//             id="textarea"
//             rows="3"
//             name="description"
//             value={inputState.description}
//             onChange={handleOnChange}
//           ></textarea>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>

//          {/* <Button
//       name={'Add Income'}
//        bPad={'.8rem 1.6rem'}
//        brad={'30px'}
//        bg={'var(--color-accent'}
//        color={'#fff'}/> */}
//       </FormStyled>

//        <table className="table my-15">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">#</th>
//              <th scope="col">Title</th>
//              <th scope="col">Amount</th>
//              <th scope="col">Date</th>
//              <th scope="col">Category</th>
//              <th scope="col">Description</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>

//        <tbody>
//        {tableData.map((user, index) => (
//             <tr key={index}>
//               <td>{user.title}</td>
//               <td>{user.amount}</td>
//               <td>{user.date}</td>
//               <td>{user.category}</td>
//               <td>{user.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// const FormStyled = styled.form`
//   display: flex;
//   flex-direction: column;
//   max-width: 400px;
//   margin: 0 auto;
//   margin-bottom: 15px;
//   .form-group {
//     margin-bottom: 1rem;
//   }

//   .form-control {
//     padding: 0.5rem 0.75rem;
//     border: 1px solid #ced4da;
//     border-radius: 0.25rem;
//     transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

//     &:focus {
//       outline: none;
//       border-color: #80bdff;
//       box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//     }
//   }
//   .selects {
//     display: flex;
//     justify-content: flex-end;
//     select {
//       color: rgba(34, 34, 96, 0.4);
//       &:focus,
//       &:active {
//         color: rgba(34, 34, 96, 1);
//       }
//     }
//   }
//   .btn-primary {
//     background-color: #007bff;
//     border-color: #007bff;
//     border-radius: 12px;
//     margin-bottom: 4px;
//     width: 20vh;
//     &:hover {
//       background-color: #0069d9;
//       border-color: #0062cc;
//     }
//   }
// `;
// export default Form;
