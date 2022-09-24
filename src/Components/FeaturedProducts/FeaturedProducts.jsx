import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from "../../context/context";
import { Loading, Error ,Products} from "../index.js"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

export default function FeaturedProducts() {
    const { products, loading, error  } = useGlobalContext();
    
    if (loading) {
        return <Loading />
  
    }

  if (error.msg) {
        return <Error/>
    }
    const featured = products.filter((product) => product.featured === true).slice(0, 3);
  return <React.Fragment>
        <Box sx={{
            backgroundColor: '#f1f5f8',
            padding: '50px 0',
        }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    letterSpacing: '0.15rem',
                                        marginBottom: '5px',

                }}>
                    Featured Products
                </Typography>
                <Box sx={{
                    width: '10%',
                    margin: '0 auto',
                    textAlign: 'center',
                    height: '5px',
                    backgroundColor: '#0063cc',
                    marginBottom: '50px',

              }}></Box>
              <Grid container spacing={2}>
                {
                  featured.map((product) => {
                        return <Products key={product.id} {...product} />
                    })
                  }
                   <Grid item xs={12} sx={{textAlign : 'center' , mt:3}} >
                  <Button variant="contained" component={Link} to='/products'>All Products</Button>

                  </Grid>
              </Grid>
            
            </Container>
        </Box>
    </React.Fragment>;
  
}
