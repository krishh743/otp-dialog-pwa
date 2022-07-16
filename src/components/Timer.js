import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function Timer() {
  const initial = 20;
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleTime = () => {
    setCounter(initial);
  };

  return (
    <div>
      {counter === 0 ? (
        <Button onClick={handleTime} variant="outlined">
          Resend
        </Button>
      ) : (
        <span style={{ color: "green", fontWeight: "bold" }}>
          Resend OTP in 00:{counter}
        </span>
      )}
    </div>
  );
}

export default Timer;
