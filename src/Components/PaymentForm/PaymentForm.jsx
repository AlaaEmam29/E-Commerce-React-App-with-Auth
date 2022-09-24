import React  from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useGlobalContext } from '../../context/context';

export default function PaymentForm() {
    const { setPayment, payment,handleChangeCheckout } = useGlobalContext();
    




    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
           
                  <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                                 onChange={(e) => {
                                handleChangeCheckout(e, setPayment, payment)
                               }}
                        id="cardName"
                        name="name"
                        label="Name on card"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                                onChange={(e) => {
                                handleChangeCheckout(e, setPayment, payment)
                               }}       
                                                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        name="cardNumber"
                        autoComplete="cc-number"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                                onChange={(e) => {
                                handleChangeCheckout(e, setPayment, payment)
                               }}       
                                                        id="expDate"
                        label="Expiry date"
                        fullWidth
                        name="expDate"
                        autoComplete="cc-exp"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                    />
                </Grid>

            </Grid>

        </React.Fragment>
    );
}

