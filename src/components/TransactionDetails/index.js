import React from "react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();

  const getCustomerDetails = () => {
    navigate("/customerList");
  };

  return (
    <div>
      <div>Below are your transactions</div>
      <button onClick={getCustomerDetails}>Customers List</button>
    </div>
  );
};

export default Transactions;
