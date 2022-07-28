import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  Button,
  TextField,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Slide from "@mui/material/Slide";
import DialogBox from "../common-ui/DialogBox";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 2,
  border: 1,
  width: "7rem",
  height: "7rem",
  backgroundColor: "gray",
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
  width:"120px",
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

function BasicDetails() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [enable, setEnable] = useState(false);
  const [open, setOpen] = useState(false);
  const [whatsapp, setWhatsapp] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleproceed = () => {
    setOpen(false);

    navigate("/form");
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleWhatsAppEnable = () => {
    if (whatsapp === false) {
      setWhatsapp(true);
    } else setWhatsapp(false);
  };

  const handleEnable = () => {
    if (enable === false) {
      setEnable(true);
    } else setEnable(false);
  };

  return (
    <Container
      style={{ display: "flex", justifyContent: "flex-start", width: "500px" }}
    >
      <div>
        <Grid
          container
          direction="column"
          maxWidth={"450px"}
          sx={{ flexDirection: "row" }}
        >
          <Typography variant="h4">Step 1: Basic Details</Typography>
          <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
            <Box
              sx={{
                ...commonStyles,
                borderRadius: "16px",
                display: "flex",
                justifyContent: "flex-end",
              }}
              className="loans-image"
            ></Box>
          </Grid>
          <Grid item xs={2} sm={3} md={3} lg={3} xl={3}>
            <Box
              sx={{ ...commonStyles, borderRadius: "16px" }}
              className="loans-image"
            ></Box>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
            <Box
              sx={{ ...commonStyles, borderRadius: "16px" }}
              className="loans-image"
            />
          </Grid>
          <Typography variant="h5">
            Personal
            <p style={{ fontSize: "14px" }}>
              And we just need a couple of more input...
            </p>
          </Typography>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50rem",
              p: 2,
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h5"> Mymoon Hidaya Jalal</Typography>
              <p>Female, 03/08/1987</p>
              <p>mymoonhidaya@gmail.com</p>
              <p>AAAPA1234A</p>
              <p>10, Rajaji Road,</p>
              <p>Street Number 10,West Tambaram,</p>
              <p>600045,</p>
              <p>Chennai, Kancheepuram</p>
              <p>Tamil Nadu.</p>
            </Grid>
          </Card>
          <Grid item xs={12} sx={{ marginTop: "15px" }}>
            <Typography variant="h5" style={{ marginLeft: "10px" }}>
              9118575852
            </Typography>
            <Typography variant="h7">
              <Checkbox
                {...label}
                defaultChecked
                onClick={() => setShow((prev) => !prev)}
              />
              My WhatsApp number is the same as above
            </Typography>
            {show && (
              <Grid item xs={12} sx={{ marginTop: "15px" }}>
                <TextField
                  id="standard-multiline-flexible"
                  label="WhatsApp Number"
                  multiline
                  type="number"
                  maxRows={5}
                  sx={{ width: "445px", marginLeft: "5px" }}
                  // value={value}
                  onChange={handleWhatsAppEnable}
                  variant="standard"
                />
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "15px" }}>
            <Typography variant="h5" style={{ marginLeft: "10px" }}>
              Marital Status
            </Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 445 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={handleEnable}
              >
                <MenuItem value={20}>Married</MenuItem>
                <MenuItem value={30}>Unmarried</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "460px",
                marginTop: "50px",
              }}
            >
              <Button
                size="large"
                disabled={!enable && !whatsapp}
                variant="contained"
                onClick={handleClickOpen}
              >
                Continue
                <ArrowRightIcon />
              </Button>
            </div>
          </Grid>
        </Grid>

        <div>
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
                onClick={handleproceed}
                autoFocus
                disableRipple
              >
                Proceed
              </BootstrapButton>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </Container>
  );
}

export default BasicDetails;
// <CheckCircleOutlineTwoToneIcon   sx={{color:"green",fontSize:"40px",marginLeft:"30px"}}/>
