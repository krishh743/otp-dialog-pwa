import React from "react";
import { Box, Grid, Container, Typography, Paper } from "@mui/material";
function VerifiedPage() {
  return (
    <Container>
      <div
        style={{
            marginTop:"40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={6}
          direction="column"
          maxWidth={"1000px"}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
<img src={"https://c.tenor.com/XloaeoqoOfcAAAAC/allianz-direct-success.gif"} />
         </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h3">
              Congratulations, You have been verified!!
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h3">Mymoon ,</Typography>

            <Typography variant="h3">
              You are only a few more steps away from
            </Typography>
            <Typography variant="h3">your dream car</Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default VerifiedPage;
