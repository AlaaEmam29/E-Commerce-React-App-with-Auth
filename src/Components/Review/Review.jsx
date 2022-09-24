import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../../context/context';
import { formatPrice } from '../../utils/helpers';




export default function Review({succeeded}) {

  const { payment, shippingAddress, userAccount  ,totalAmount ,shippingFee ,cart} = useGlobalContext()
  const { firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    country } = shippingAddress
  
  const { expDate, name, cardNumber } = payment
  const lastNum = cardNumber.slice(-4)
  const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: `${name}` },
  { name: 'Card number', detail: `xxxx-xxxx-xxxx-${lastNum}` },
  { name: 'Expiry date', detail: `${expDate}` },
  ];
  
  return (
    <React.Fragment>
      {
        userAccount &&  <Typography variant="h6" gutterBottom>
        Hello, {userAccount.nickname}
        </Typography>
      }

      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product , index) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{
                textTransform: 'capitalize',
                
              }}
              secondaryTypographyProps={{
                fontSize: '20px'
              ,color: '#000'
              }} 
    primaryTypographyProps={{fontSize: '18px'}} 

              primary={`product: ${index + 1}`} 
             secondary={product.name} />
            <Typography variant="subtitle2" sx={{color: '#000'}}> $ { formatPrice(product.price)}</Typography>
           
          </ListItem>
        ))}
 <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {
              shippingFee ? `$ ${formatPrice(shippingFee)}` : 'Free'
           }
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ { 
              formatPrice(totalAmount + shippingFee)
            }
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{firstName} {lastName}</Typography>
          <Typography gutterBottom>{address1} {address2}</Typography>
          <Typography gutterBottom>{city}, {state}, {country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
                 {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
            
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
