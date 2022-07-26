import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import VerifiedPage from "./VerifiedPage";
import { Button } from "@mui/material";
import StepperBar from "./StepperBar";
import BasicDetails from "../page-25/BasicDetails";
import BasicDetailsForm from "../page-25/BasicDetailsForm";
import BasicDetailsVehicle from "../page-25/BasicDetailsVehicle"
function OtpPage() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<BasicDetails />} />
        <Route exact path="/form" element={<BasicDetailsForm />} />
        <Route exact path="/vehicle" element={<BasicDetailsVehicle />} />
      </Routes>
    </div>
  );
}

export default OtpPage;
