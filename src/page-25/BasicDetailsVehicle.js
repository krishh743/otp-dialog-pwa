import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Autocomplete from "@mui/material/Autocomplete";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 2,
  border: 1,
  width: "7rem",
  height: "7rem",
  backgroundColor: "gray",
};

function BasicDetails() {
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };

  let navigate = useNavigate();
  const [location, setLoaction] = useState(false);
  const [city, setCity] = useState(false);
  const [make, setMake] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [model, setModel] = useState(false);
  const [variant, setVariant] = useState(false);

  const handleButton = () => {
    navigate("/initialoffer");
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
          sx={{ flexDirection: "row", marginTop: "40px" }}
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
            >
              <CheckCircleOutlineTwoToneIcon
                sx={{ fontSize: "40px", marginLeft: "30px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={2} sm={3} md={3} lg={3} xl={3}>
            <Box
              sx={{ ...commonStyles, borderRadius: "16px" }}
              className="loans-image"
            >
              <CheckCircleOutlineTwoToneIcon
                sx={{ fontSize: "40px", marginLeft: "30px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
            <Box
              sx={{ ...commonStyles, borderRadius: "16px" }}
              className="loans-image"
            />
          </Grid>

          <Grid item xs={14} sx={{ marginTop: "25px" }}>
            <Typography variant="h5" style={{ marginBottom: "25px" }}>
              Vehicle
            </Typography>
            <Typography>Location Pincode</Typography>
            <TextField
              id="standard-multiline-flexible"
              multiline
              type="number"
              maxRows={5}
              sx={{ width: "445px", marginLeft: "5px" }}
              onChange={() => setLoaction(true)}
              variant="standard"
            />
          </Grid>
          <Grid item xs={14} sx={{ marginTop: "25px" }}>
            <Typography>City</Typography>
            <Autocomplete
              {...flatProps}
              id="flat-demo"
              onChange={() => setCity(true)}
              disabled={!location}
              renderInput={(params) => (
                <TextField {...params} label="" variant="standard" />
              )}
            />
          </Grid>
          <Grid item xs={14} sx={{ marginTop: "25px" }}>
            <Typography>Make</Typography>
            <Autocomplete
              {...flatProps}
              id="flat-demo"
              disabled={!city}
              renderInput={(params) => (
                <TextField {...params} label="" variant="standard" />
              )}
              onChange={() => setMake(true)}
            />
          </Grid>
          <Grid item xs={14} sx={{ marginTop: "25px" }}>
            <Typography>Monthly Declared Income</Typography>
            <Autocomplete
              {...flatProps}
              id="flat-demo"
              disabled={!make}
              onChange={() => setMonthly(true)}
              renderInput={(params) => (
                <TextField {...params} label="" variant="standard" />
              )}
            />
          </Grid>
          <Grid item xs={14} sx={{ marginTop: "25px" }}>
            <Typography>Model</Typography>
            <Autocomplete
              {...flatProps}
              id="flat-demo"
              disabled={!monthly}
              onChange={() => setModel(true)}
              renderInput={(params) => (
                <TextField {...params} label="" variant="standard" />
              )}
            />
          </Grid>
          <Grid item xs={14} sx={{ marginTop: "25px" }}>
            <Typography>Variant</Typography>
            <Autocomplete
              {...flatProps}
              id="flat-demo"
              disabled={!model}
              onChange={() => setVariant(true)}
              renderInput={(params) => (
                <TextField {...params} label="" variant="standard"  />
              )}
            />
          </Grid>

          {variant && ( <Grid item xs={14} >
            <Typography variant="h5">On Road Price </Typography>
            <p style={{ fontSize: "30px", marginLeft: "100px" }}>5,50,000 </p>
          </Grid> )}

          <Grid>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "460px",
              }}
            >
              <Button
                size="large"
                disabled={!variant}
                variant="contained"
                onClick={handleButton}
              >
                Continue
                <ArrowRightIcon />
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
];

export default BasicDetails;
