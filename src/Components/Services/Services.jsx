import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {services} from '../../utils/constants';

export default function Services() {
    return <React.Fragment>
        <Box sx={{
            backgroundColor: '#4CA5FF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '4rem',
            padding: '2rem',
        }}>
            <Container maxWidth="lg">
                <Box sx={{paddingTop: '2rem' ,paddingBottom: '4rem'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>

                            <Typography component={"h3"} sx={{
                                color: '#fff',
                                fontSize: '1.7rem',
                                letterSpacing: '0.2rem',
                                fontWeight: 'bold',

                            }}>
                                Custom Furniture
                                <br />
                                Built Only For You

                            </Typography>


                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{
                                fontSize: '1rem',
                                letterSpacing: '0.1rem',
                                lineHeight: '1.5rem',
                            }}>
                                We build custom furniture for your home or office. We can build anything from a custom desk to a custom kitchen island. We can also build custom furniture for your office. We can build anything from a custom desk to a custom kitchen island. We can also build custom furniture for your office.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className='services-container' >
                    <Grid container spacing={2}>
                        {
                            services.map((service, index) => {
                              
                                return <Grid item xs={12} md={4} key={index}>
                                       <Card sx={{
                                        minWidth: 275,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '1.2rem',
                                        textAlign: 'center',
                                    }}>
                                        <CardContent>
                                            <div className='icon'>
                                            {service.icon}
                                            </div>
                                            <Typography sx={{ fontSize: 20 , fontWeight: 'bold',textTransform:'capitalize' }} color="text.secondary" gutterBottom>
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {service.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>  
                                }
                                   
                                
                                
                            )
                       }
                    </Grid>
                </Box>

            </Container>
        </Box>
    </React.Fragment>
}

