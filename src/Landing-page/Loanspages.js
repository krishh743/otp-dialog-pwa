// import { Container } from "@mui/system";
import React from "react";
import { Box, Grid, Container, Typography, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import "./Loanspages.css";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 3,
  border: 1,
  width: "7rem",
  height: "7rem",
  backgroundColor: "gray",
};

function Loanspages() {
  return (
    <Container>
      <Paper component={Box} width="100%" className="card-container">
        <Grid
          container
          spacing={2}
          direction="column"
          maxWidth={"450px"}
        >
          <Typography variant="h3" style={{ marginLeft: "55px" }}>
            Select Your Loan
          </Typography>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{ ...commonStyles, borderRadius: "16px" }}
                className="loans-image"
              />
              <Typography variant="h4">
                <Link to="./newCarLoan" style={{ textDecoration: "none" }}>
                  New Car Loan
                </Link>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{ ...commonStyles, borderRadius: "16px" }}
                className="used-car"
              />
              <Typography variant="h4" color="primary" font-weight="bold">
                <Link to="./usedCarLoan" style={{ textDecoration: "none" }}>
                  Used Car Loan
                </Link>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{ ...commonStyles, borderRadius: "16px" }}
                className="bike-loan"
              />
              <Typography variant="h4" color="primary" font-weight="bold">
                <Link to="./twoWheelerLoan" style={{ textDecoration: "none" }}>
                  2 Wheeler Loan
                </Link>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "none",
                marginLeft: "15px",
              }}
            >
              <Box
                sx={{ ...commonStyles, borderRadius: "16px" }}
                className="car-against"
              />
              <Typography variant="h4" color="primary" font-weight="bold">
                <Link to="./loanAgainstCar" style={{ textDecoration: "none" }}>
                  Loan Against Car
                </Link>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Loanspages;
