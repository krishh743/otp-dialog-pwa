import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import OTPInput,{ResendOTP} from "otp-input-react";
import { useReadOTP } from "react-read-otp";
import CloseIcon from "@mui/icons-material/Close";
// import "./App.css";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Otp() {
  const [enabled, setEnabled] = useState(false);
  const [otp, setOTP] = useState("");
  useReadOTP(setOTP, {
    enabled,
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const OtpInputCard = ({ title, resendOTP, ...rest }) => {
    const [OTP, setOTP] = useState("");
    return (
      <div
        style={{
          padding: 20,
        }}
      >
        <div style={{ marginBottom: 22 }}>{title}</div>
        <OTPInput value={OTP} onChange={setOTP} {...rest} />
      </div>
    );
  };

  const handleSendOtp = () => {
    // do your api call
    // enable otp listener
    const res = Math.floor(1000 + Math.random() * 9000);
    setTimeout(() => {
      setOTP(res);
      setEnabled(true);
    }, 3000);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} size="large">
        desktop otp
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="close-icon">
          <CloseIcon onClick={handleClose}>close</CloseIcon>
        </div>
        <DialogTitle>{"OTP verification"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            OTP sent to Aadhar registered mobile number
          </DialogContentText>

          <OtpInputCard
            autoFocus
            OTPLength={4}
            placeholder={[0, 0, 0, 0]}
            otpType="number"
            disabled={false}
            resendOTP={{}}
            // value={otp}
            // onChange={(e) => setOTP(e.target.value)}
          />
          
          <ResendOTP style={{display:"flex",justifyContent: "flex-start"}} handelResendClick={() => console.log("Resend clicked")} />

          <div style={{marginTop:"30px"}}>
            {enabled && <p style={{ color: "green" }}>Your OTP is Verified</p>}
            <Button onClick={handleSendOtp} variant="contained">
              Proceed
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="btn-proceed"></div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Otp;
