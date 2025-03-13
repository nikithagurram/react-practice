import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./components/NoPage";
import "./App.css";
import Welcome from "./components/Welcome";
import Transactions from "./components/TransactionDetails";
import CustomerList from "./components/CustomerList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            index
            element={
              <Login pageHeader={"Please enter username and password"} />
            }
          />
          <Route path="/success" element={<Welcome />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/customerList" element={<CustomerList />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
