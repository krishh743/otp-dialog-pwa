import React, { useState, useEffect } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import OTPInput, { ResendOTP } from "otp-input-react";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Otp from "../components/Otp";
import swal from "sweetalert";

export default function Api() {
  const [state, setState] = useState({
    bottom: false,
  });
  const [enabled, setEnabled] = useState(false);
  const [otp, setOTP] = useState("");

  const OtpInputCard = ({ title, resendOTP, ...rest }) => {
    const [OTP, setOTP] = useState("");
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <div style={{ marginBottom: 32 }}>{title}</div> 
        <OTPInput value={OTP} onChange={setOTP} {...rest}/>
      </div>
    );
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleSendOtp = () => {
    // do your api call
    // enable otp listener
    const res = Math.floor(1000 + Math.random() * 9000);
    setTimeout(() => {
      setOTP(res);
      setEnabled(true);
      swal("OTP verified successfully!");
    }, 3000);
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === "bottom" ? "auto" : 250 }} role="presentation">
      <div className="close-icon">
        <CloseIcon onClick={toggleDrawer(anchor, false)}>close</CloseIcon>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <h2>OTP Verification</h2>
        <div style={{ marginBottom: "20px", marginLeft: "50px" }}>
          <OtpInputCard
            title="OTP sent to Aadhar registered mobile number"
            autoFocus
            OTPLength={4}
            placeholder={[0, 0, 0, 0]}
            otpType="number"
            disabled={false}
            resendOTP={{}}
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <ResendOTP
            style={{ display: "flex", justifyContent: "flex-start" }}
            handelResendClick={() => console.log("Resend clicked")}
          />
        </div>
        <div>
          {enabled && <p style={{ color: "green" }}>Your OTP is Verified</p>}
          <Button onClick={handleSendOtp} variant="contained">
            Proceed
          </Button>
        </div>
      </div>
    </Box>
  );

  return (
    <Container>
      {window.innerWidth < 700 ? (
        <div className="btn-otp">
          {["bottom"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button variant="contained" onClick={toggleDrawer(anchor, true)}>
                mobile OTP
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="btn-otp">
          <Otp />
        </div>
      )}
    </Container>
  );
}
