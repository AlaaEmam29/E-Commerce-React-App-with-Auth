import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { CartTable, CartTotal, Tabs } from "../../Components";
import { useGlobalContext } from '../../context/context';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart ,clearCart } = useGlobalContext();


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
    return (
        <React.Fragment>
            <Box sx={{
                minHeight: '100vh',
            }}>
                <Tabs nameTab='Cart' />
                <Container maxWidth="md" >
                    <Box sx={{ margin: '50px 0' }}>
                        <CartTable />
                        <Box
                            sx={{
                                margin: '50px 0',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Button variant="contained"
                                component={Link}
                                to="/products">Continue Shopping</Button>
                            <Button variant="contained"
                                onClick={clearCart}
                                color="error">Clear Shopping Cart</Button>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                        
                        }}>
                        
                            <CartTotal />
                           
                            
                        
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}


export default Cart;