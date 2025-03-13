import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchTransactionList } from "../../store/reducers/trasactions/action";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.saveLogin.loginDetails);
  const preferedName = useSelector((state) => state.saveLogin.preferedName);
  const navigate = useNavigate();

  const transactionData = useSelector(
    (state) => state.transactions.transactionDetails
  );
  console.log("transactionData", transactionData);
  const getTransDetails = () => {
    dispatch(fetchTransactionList());
    navigate("/transactions");
  };

  return (
    <>
      <div>Your preferedName is {preferedName}</div>
      <div>Welcome to the Home Page {loginData.username}</div>
      <button onClick={getTransDetails}>Get Transactions List</button>
    </>
  );
};

export default Welcome;
