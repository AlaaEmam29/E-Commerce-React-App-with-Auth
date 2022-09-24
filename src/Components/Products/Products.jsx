import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from "../../context/context";
import {Link} from 'react-router-dom';

import { formatPrice } from "../../utils/helpers";
export default function Products({ id, image, name, price }) {
    const { fetchSingleProduct } = useGlobalContext()
      const Img = styled('img')({
          display: 'block',
          height: '250px',
 width: '100%',
   objectFit: 'cover !important',
   
      });
    return <React.Fragment>
   
                   <Grid item xs={12} md={4}  >
                        <Box className='wrapper'>
                            <Img alt={name} src={image} />
                                <Box className='overlay' component={Link}
                                    onClick={() => {
                                        fetchSingleProduct(id);
                                    }}
                                    to={`/products/${id}`}>
                                <SearchTwoToneIcon sx={{fontSize: '40px'}}/>
                                </Box>
                            </Box>
                            <Typography variant="h6" component="h3" sx={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                letterSpacing: '0.1rem',
                                marginTop: '10px',
                                textTransform: 'capitalize',

                            }}>
                                {name}
                            </Typography>
                            <Typography variant="body1" component="p" sx={{
                                textAlign: 'center',
                                letterSpacing: '0.1rem',
                                marginTop: '10px',
                                color: '#0063cc',
                            }}>
                                {
                                   formatPrice(price)
                                }$
                            </Typography>
                    </Grid>
    </React.Fragment>;
}
