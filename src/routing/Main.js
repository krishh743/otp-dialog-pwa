import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../page/Home";
import Menu from "../page/Menu";
import BankFrom from "../page/BankForm";
import Loans from "../page/Loans";
import Applications from "../page/Applications";

function Main() {
  return (
    <div >

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="menu"  element={<Menu />} />
        <Route exact path="bankform" element={<BankFrom />} />
        <Route exact path="loans" element={<Loans />} />
        <Route exact path="applications" element={<Applications />} />
      </Routes>
      
    </div>
  );
}

export default Main;
