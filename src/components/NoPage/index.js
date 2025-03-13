import React from "react";
import { useSelector } from "react-redux";

const NoPage = () => {
  const preferedName = useSelector((state) => state.saveLogin.preferedName);
  console.log("No page", preferedName);
  return (
    <div>Dear{preferedName} The page you are looking for is not available</div>
  );
};

export default NoPage;
