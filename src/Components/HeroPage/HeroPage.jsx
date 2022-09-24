import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import heroPage from '../../assets/images/Ecommerce web page-pana.png';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"; // v6
export default function HeroPage() {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/products');
  }
  const Img = styled('img')(({ theme }) => ({
    margin: 'auto',
    display: 'none',
    maxWidth: '100%',
    maxHeight: '100%',
    [theme.breakpoints.up('md')]: {
    display: 'block',
    }
}));
  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });


  return <React.Fragment>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
                  <Container maxWidth="lg">

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            color: '#333',
            padding: '1rem',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
              letterSpacing: '0.1rem',
              lineHeight: '1.5rem',
              


          }}>
            <Typography className='title'>
              Our product encourages people to go make memories with their loved ones. You typically don’t see people sitting around a fire by themselves — they normally are with friends and family. There’s something really cool about that
            </Typography>
            <div >
              <BootstrapButton variant="contained" disableRipple onClick={navigateTo}>
                Show Now
              </BootstrapButton>
            </div>
          </Box>


        </Grid>
        <Grid item xs={12} md={6}>
          <Img alt="Ecommerce web page" src={heroPage} />
        </Grid>
      </Grid>
</Container>
    </Box>

  </React.Fragment>;
}
