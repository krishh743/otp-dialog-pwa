import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import VerifiedPage from "./VerifiedPage";
import { Button } from "@mui/material";
import StepperBar from "./StepperBar";
import BasicDetails from "../page-25/BasicDetails";
import BasicDetailsForm from "../page-25/BasicDetailsForm";
import BasicDetailsVehicle from "../page-25/BasicDetailsVehicle"
import InitialOffer from "../page-25/InitialOffer";
function OtpPage() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<BasicDetails />} />
        <Route exact path="/form" element={<BasicDetailsForm />} />
        <Route exact path="/vehicle" element={<BasicDetailsVehicle />} />
        <Route exact path="/initialoffer" element={<InitialOffer />} />

      </Routes>
    </div>
  );
}

export default OtpPage;
