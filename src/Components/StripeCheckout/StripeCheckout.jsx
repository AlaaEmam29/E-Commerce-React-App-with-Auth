import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AddressForm, PaymentForm, Review } from '../index.js'
import FormControl from '@mui/material/FormControl';

import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/context.js';
const steps = ['Shipping address', 'Payment details', 'Review your order'];
const theme = createTheme();
const localStorageStep = () => {
    let step = localStorage.getItem('step');
    if (step) {

        return JSON.parse(step);

    } else {
        return 0;
    }
}

export default function StripeCheckout() {
    const {

        clearCart,
        clearCheckout,


    } = useGlobalContext()



    const [activeStep, setActiveStep] = useState(localStorageStep);
    useEffect(() => {
        localStorage.setItem('step', activeStep);
    }, [activeStep]);
    const handleNext = () => {
        setActiveStep(activeStep + 1);

    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const handleReset = () => {
        clearCart();
        clearCheckout();
        localStorage.removeItem('step');
    };








    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <AddressForm />;
            case 1:
                return <PaymentForm />;

            case 2:
                return <Review />
            default:
                throw new Error('Unknown step');
        }

    }


    return (
        <ThemeProvider theme={theme}>


            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {(activeStep === steps.length) ? (
                        <React.Fragment>
                            <Typography
                                sx={{
                                    color: 'success.main',
                                }}
                                variant="h6" gutterBottom>
                                Thank you for your order.
                                payment is successful

                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </Typography>


                            <Button
                                to="/"
                                component={NavLink}
                                variant="contained"
                                sx={{ mt: 3, ml: 1 }}
                                onClick={() => {

                                    handleReset();

                                }}
                            >
                                Back to Store and Continue Shopping



                            </Button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <FormControl


                                onSubmit={(e)=>e.preventDefault()}>

                                {getStepContent(activeStep)}


                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button
                                            type="submit"
                                            onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        type="submit"
                                        sx={{ mt: 3, ml: 1 }}

                                    >
                                        {activeStep === steps.length - 1 ? "Place order" : "Next"}

                                    </Button>
                                </Box>


                            </FormControl>
                        </React.Fragment>
                    )}
                </React.Fragment>
            </Paper>
        </ThemeProvider>
    );
}