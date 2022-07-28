import React from "react";
import Main from "./routing/Main";
import Routing from "../src/Landing-page/Routing"
import OtpPage from "./welcome-page/OtpPage";
import BasicDetails from "./page-25/BasicDetails";
import StepperBar from "./welcome-page/StepperBar";
import BasicDetailsForm from "./page-25/BasicDetailsForm";
import Otp from "./components/Otp";

export default function App() {
  return (
    <div>
    <OtpPage/>
    </div>
    );
  }
  
  // <Otp/>
  // <BasicDetails/>
  // <BasicDetailsForm/>
  // <StepperBar/>
  // <Main/>
  // <Routing/>