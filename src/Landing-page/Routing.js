import React from "react";
import { Routes, Route,Link} from "react-router-dom";
import Loanspages from "./Loanspages";
import NewCarLoan from "./NewCarLoan";
import UsedCarLoan from "./UsedCarLoan";
import TwoWheelerLoan from "./TwoWheelerLoan";
import LoanAgainstCar from "./LoanAgainstCar";
// import Menu from "../page/Menu";
// import BankFrom from "../page/BankForm";
// import Loans from "../page/Loans";
// import Applications from "../page/Applications";
// import Login from "../page/Login";

function Main() {
  return (
    <div >

      <Routes>
        <Route exact path="/" element={<Loanspages />} />
        <Route exact path="newCarLoan"  element={<NewCarLoan />} />
        <Route exact path="usedCarLoan" element={<UsedCarLoan />} />
        <Route exact path="twoWheelerLoan" element={<TwoWheelerLoan />} />
        <Route exact path="loanAgainstCar" element={<LoanAgainstCar />} />
      </Routes>
      
      
      </div>
      );
    }
    
    export default Main;
    
        //   <Link to="./">Loanspages</Link>
        //   <Link to="./newCarLoan">newCarLoan</Link>
        //   <Link to="./usedCarLoan">usedCarLoan</Link>
        //   <Link to="./twoWheelerLoan">twoWheelerLoan</Link>
        //   <Link to="./loanAgainstCar">loanAgainstCar</Link>
    
