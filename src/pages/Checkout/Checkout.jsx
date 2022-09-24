import React from "react";
import { StripeCheckout, Tabs } from "../../Components";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useGlobalContext } from "../../context/context";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
} from '@stripe/react-stripe-js'
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

export default function Checkout() {
  const { cart ,shippingFee, totalAmount } = useGlobalContext();
  const [clientSecret, setClientSecret] = useState('')


  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:         JSON.stringify({ cart, shippingFee, totalAmount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
   const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

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
                <Elements options={options} stripe={promise} >

            <StripeCheckout clientSecret={clientSecret} />
            </Elements>
        </Box>

      </Container>
    </Box>
  </React.Fragment>;
}
