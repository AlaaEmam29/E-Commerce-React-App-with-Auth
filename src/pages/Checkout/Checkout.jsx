import React from "react";
import { StripeCheckout, Tabs } from "../../Components";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useGlobalContext } from "../../context/context";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cart  } = useGlobalContext();



 

    if (cart.length < 1) {
        return (
            <Container>
                <Box sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
                    , flexDirection: 'column',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                }}>
                    <h1>your cart is empty</h1>
                    <Button
                        color="primary"
                        component={Link}
                        to="/products"

                        variant="contained">
                        Fill it with products</Button>


                </Box>
            </Container>
        )

    }
  return <React.Fragment>
    <Box
      // sx={{
      //   minHeight: '100vh',
      // }}
    >
      <Tabs nameTab='Checkout' />
      <Container maxWidth="md" >
        <Box sx={{ margin: '50px 0' }}>

            <StripeCheckout  />
        </Box>

      </Container>
    </Box>
  </React.Fragment>;
}
