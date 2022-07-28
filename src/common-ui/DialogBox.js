import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  Button,
  TextField,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "2px black solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "black",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "black",
    borderColor: "black",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "black",
    borderColor: "black",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export function DialogBox() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // navigate("/form");
    // alert("jlkfjfenk")
  };

  return (
    <Container>
      <div>
        <Button onClick={handleClickOpen}>button </Button>

        <Dialog
          TransitionComponent={Transition}
          keepMounted
          open={open}
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            id="responsive-dialog-title"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h5">Confirmation</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              color="bold"
              sx={{ justifyContent: "center" }}
            >
              <Typography>
                Are You sure want to submit the personal details?
              </Typography>
              <Typography>
                Post submission any information cannot be revisited or edited
                again.
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center" }}>
            <BootstrapButton
              variant="contained"
              style={{
                fontWeight: "bold",
                backgroundColor: "white",
                color: "black",
              }}
              onClick={handleClose}
              autoFocus
              disableRipple
            >
              Cancel
            </BootstrapButton>

            <BootstrapButton
              variant="contained"
              sx={{ backgroundColor: "black", fontWeight: "bold" }}
              onClick={handleClose}
              autoFocus
              disableRipple
            >
              Proceed
            </BootstrapButton>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
}

// export default DialogBox;
