import React from 'react'
import { styled } from "@mui/material/styles";
import {
  
    Button,
   
  } from "@mui/material";

export  function Buttonwithicon() {
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

  return (
    <div>
    <BootstrapButton
    variant="contained"
    sx={{ backgroundColor: "black", fontWeight: "bold" }}
    // onClick={handleClose}
    autoFocus
    disableRipple
  >
    Proceed button
  </BootstrapButton> 
     </div>
  )
}

