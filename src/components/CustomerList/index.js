import React from "react";
import { useSelector } from "react-redux";

const CustomerList = () => {
  const preferedName = useSelector((state) => state.saveLogin.preferedName);
  console.log("customerlist", preferedName);
  return <div>Here is the list of the Customer{preferedName}</div>;
};

export default CustomerList;
