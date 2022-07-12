import {
    Box,
    Grid,
    Container,
    Typography,
    Paper,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
  } from "@mui/material";
  import { useState, useEffect } from "react";
  import Api from "./Api";
  import {
    isEmailValid,
    isNumericField,
    isPanNumberValid,
  } from "../utils/ValidationUtils";
  import Alert from "@mui/material/Alert";
  import Stack from "@mui/material/Stack";
  
  const Form = (props) => {
    const [mode, setMode] = useState("online");
    const [name, setName] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [isConsentChecked, setConsentChecked] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [toggle, setToggle] = useState(false);
    const errors = {};
    const [data, setData] = useState([]);
  
    const handleChange = (e) => {
      const input = e.target.name;
      if (input === "name") {
        setName(e.target.value);
      }
      if (input === "email") {
        setEmail(e.target.value);
      }
      if (input === "mobileNumber" && isNumericField(e.target.value)) {
        setMobileNumber(e.target.value);
      }
      if (input === "panNumber") {
        setPanNumber(e.target.value);
      }
    };
  
    useEffect(() => {
      let url = "http://localhost:3000/form";
      fetch(url).then((resp) => {
        resp.json()
          .then((result) => {
            setData(result);
            localStorage.setItem("data", JSON.stringify(result));
            console.log("setData saved ")
          })
          .catch((err) => {
            let collection = localStorage.getItem("form");
            setData(JSON.parse(collection));
            setMode("offline");
          });
      });
    },[]);
  
    //validations
    const runValidations = () => {
      if (name.trim().length === 0) {
        errors.name = "Please enter name";
      }
      if (email.trim().length === 0) {
        errors.email = "Please enter email";
      } else if (isEmailValid(email) === false) {
        errors.email = "Please enter valid email";
      }
      if (mobileNumber.length === 0) {
        errors.mobileNumber = "Please enter mobile number";
      } else if (mobileNumber.length !== 10) {
        errors.mobileNumber = "Mobile number must include 10 digits";
      }
      if (isPanNumberValid(panNumber) === false) {
        errors.panNumber = "Please enter PAN number";
      }
    };
  
    const handleConsentCheckboxChange = (event) => {
      setConsentChecked(event.target.checked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = runValidations();
      if (Object.keys(errors).length === 0) {
        setFormErrors({});
      } else {
        setFormErrors(errors);
      }
  
      const formData = {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        panNumber: panNumber,
      };
      console.log(formData, "formData");
  
      alert("Data Submittd Successfully");
  
      setName("");
      setEmail("");
      setMobileNumber("");
      setPanNumber("");
      props.history.push("/api");
    };
  
    const handleToggle = () => {
      setToggle(!toggle);
    };
    return (
      <div>
        {mode === "offline" ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="warning">
              You are Offline! Please check your network connection
            </Alert>
          </Stack>
        ) : null}
        <center>
          <Container maxWidth="md" style={{ paddingTop: "50px" }}>
            <div></div>
            <Paper
              component={Box}
              width="100%"
              style={{ height: "700px", marginRight: "10px" }}
            >
              {/* <h2>Registration Form</h2> */}
              <Typography
                variant="h4"
                style={{
                  textAlign: "center",
                  color: "brown",
                  fontStyle: "italic",
                }}
              >
                IndusInd Bank
              </Typography>
              <Grid
                container
                spacing={2}
                direction="column"
                maxWidth={"300px"}
                style={{ marginTop: "40px", marginBottom: "10px" }}
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    fullWidth
                    placeholder="Enter your Name"
                    id="name"
                    label="Name"
                    variant="outlined"
                    autoFocus
                    focused
                    value={name}
                    name="name"
                    onChange={handleChange}
                    error={formErrors.name ? true : false}
                  />
                  {formErrors.name && (
                    <span style={{ color: "red" }}>{formErrors.name}</span>
                  )}
                </Grid>
  
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    fullWidth
                    placeholder="Mobile Number"
                    id="mobile"
                    label="Mobile Number"
                    variant="outlined"
                    inputProps={{ maxLength: 10 }}
                    value={mobileNumber}
                    name="mobileNumber"
                    onChange={handleChange}
                    error={formErrors.mobileNumber ? true : false}
                  />
                  {formErrors.mobileNumber && (
                    <span style={{ color: "red" }}>
                      {formErrors.mobileNumber}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    fullWidth
                    placeholder="PAN Number"
                    id="pan"
                    label="PAN Number"
                    variant="outlined"
                    inputProps={{ maxLength: 10 }}
                    value={panNumber}
                    name="panNumber"
                    onChange={handleChange}
                    error={formErrors.panNumber ? true : false}
                  />
                  {formErrors.panNumber && (
                    <span style={{ color: "red" }}>{formErrors.panNumber}</span>
                  )}
                  <p style={{ fontSize: "10px", marginTop: "8px" }}>
                    Your PAN is required to check credit details and will help us
                    in giving you an accurate offer
                  </p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    fullWidth
                    placeholder="Enter your Email"
                    id="email"
                    label="Email ID"
                    variant="outlined"
                    value={email}
                    name="email"
                    onChange={handleChange}
                    error={formErrors.email ? true : false}
                  />
                  {formErrors.email && (
                    <span style={{ color: "red" }}>{formErrors.email}</span>
                  )}
                </Grid>
              </Grid>
  
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    onChange={handleConsentCheckboxChange}
                    checked={isConsentChecked}
                    style={{ marginBottom: "20px", marginLeft: "10px" }}
                  />
                }
                label="Consent to override any DND subscription, Bussiness
                                    Executive to contact and fetch CIBIL score to process loan
                                    request"
              />
  
              <Api />
            </Paper>
          </Container>
        </center>
      </div>
    );
  };
  export default Form;
  