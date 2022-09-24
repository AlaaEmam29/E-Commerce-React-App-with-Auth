import React from "react";
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';

const NotFound = () => {
  let navigate = useNavigate();

    const navigateTo = () => {
        navigate("/");
    }
    return <React.Fragment>

      <Box className="not-found" >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button onClick={navigateTo} 
  variant="contained">Back Home</Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500} height={250}
            />
          </Grid>
        </Grid>
      </Container>
        </Box>
        </React.Fragment>;
}
export default NotFound;