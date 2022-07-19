import { TextField, Typography } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div style={{ marginTop:"20rem",display: "flex",justifyContent: "center" }}>
    <Typography variant="h3" gutterBottom component="div">
    OTP Login
  </Typography>   
  <TextField  label="enter otp here" variant="outlined"  type="number" />
    </div>
  )
}

export default Login