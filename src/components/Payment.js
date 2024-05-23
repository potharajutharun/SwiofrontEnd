import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Payment() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      'http://localhost:3001/payment',
      { name, amount }
    )
    .then(result => {
      console.log(result);
      navigate('History');
    })
    .catch(err => {
      console.log(err);
      retrySubmission(); 
    });
  };

  const retrySubmission = () => {
    let retryCount = 0;
    const maxRetries = 3;

    const submitWithRetry = () => {
      if (retryCount >= maxRetries) {
        console.log("Exceeded maximum retry attempts.");
        return;
      }

      axios.post(
        'http://localhost:3001/payment',
        { name, amount }
      )
      .then(result => {
        console.log(result);
        navigate('history');
      })
      .catch(err => {
        console.log(`Error on attempt ${retryCount + 1}:`, err);
        retryCount++;
        setTimeout(submitWithRetry, 1000);
      });
    };

    submitWithRetry();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-5 bg-light rounded shadow" onSubmit={handleSubmit}>
        <h3 className="mb-4">Payment Form</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="card" className="form-label">Amount</label>
          <input
            type="text"
            className="form-control"
            id="card"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
