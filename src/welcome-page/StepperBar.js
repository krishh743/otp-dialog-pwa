import React, { useState } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const steps = [
  {
    id: 0,
    label: "ID Verification",
    description: `Completed on July 12,12:20 PM`,
  },
  {
    id: 1,
    label: "Basic Details",
    description: "Personal,Professional,MMV Details",
  },
  {
    id: 2,
    label: "Initial Offer",
    description: `Customise Your Offer`,
  },

  {
    id: 3,
    label: "More Details",
    description: `A few more inputs on address and income`,
  },

  {
    id: 4,
    label: "Final Offer",
    description: `Loan finalisation and disbursement`,
  },
];

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "25px" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

function StepperBar(props) {
  const [count, setCount] = useState(20);
  const [activeStep, setActiveStep] = useState(0);

  const handleClick = () => {
    setActiveStep(activeStep + 1);

    if (count === 20) {
      setCount(count + 20);
    } else if (count === 40) {
      setCount(count + 20);
    } else if (count === 60) {
      setCount(count + 20);
    } else if (count === 80) {
      setCount(count + 20); 
    } else if (count === 100) {
      setCount(count);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 600, margin: "95px" }}>
        <Typography variant="h4">
          Your milestones in the loan journey
        </Typography>
        <LinearProgressWithLabel
          value={count}
          sx={{
            backgroundColor: "darkred",
            height: "14px",
            borderRadius: "15px",
          }}
        />

        <Stepper
          sx={{ zoom: "2" }}
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography sx={{ color: "gray", fontSize: "10px" }}>
                  {step.description}
                </Typography>
                <Button onClick={handleClick}>Next</Button>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: "60px",
          }}
        >
          <Button
            size="large"
            variant="contained"
            sx={{ backgroundColor: "black" }}
          >
          
            Continue <ArrowRightIcon />
          </Button>
        </div>
      </Box>
    </Container>
  );
}

export default StepperBar;
