import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { formatPrice } from "../../utils/helpers";
import Divider from '@mui/material/Divider';



export default function CartTotal() {
            const { userAccount, loginWithRedirect, totalAmount,shippingFee } = useGlobalContext();

    return <React.Fragment>
        <div>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
                    <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',

                    }}>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          Subtotal:
        </Typography>
                    <Typography variant="h6" component="div" color="text.primary">
                        $ {formatPrice(totalAmount)}
        </Typography>
                    </Box>
        <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '15px',

                    }}>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Shipping Fee:
        </Typography>
                        <Typography variant="body2" component="div" color="text.secondary">
                            {shippingFee === 0 ? 'Free' : `$ ${formatPrice(shippingFee)}`}
        </Typography>
                    </Box>
  <Divider />
               <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '15px',

                    }}>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          Order Total:
        </Typography>
                    <Typography variant="h6" component="div" color="text.primary">
                        $ {formatPrice(totalAmount+shippingFee)}
        </Typography>
                    </Box>     
      </CardContent>
     
            </Card>
            {
                userAccount ?  <Button variant="contained"
                sx={{
                    width: '100%',
                    margin: '5px 0',
                }}
                    component={Link} to='/checkout'>Proceed to Checkout</Button>
                    : <Button variant="contained"
                        sx={{
                            width: '100%',
                            margin: '5px 0',
                        }}
                        onClick={loginWithRedirect}
                        >Login to Checkout</Button>
            }
        
                
                                
        </div>
       

    </React.Fragment>;
}
