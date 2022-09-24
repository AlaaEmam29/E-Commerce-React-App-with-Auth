import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Typography } from "@mui/material";

export default function Contact() {
    return <React.Fragment>
        <Box sx={{
            marginTop: '7rem',
            padding: '10rem 0',
        }}>
            <Container maxWidth="lg">
                <Box >
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                            <Box>
                            <Typography component={"h3"} sx={{
                                fontSize: '1.5rem',
                                letterSpacing: '0.2rem',
                                fontWeight: 'bold',

                            }}>
                                Join our newsletter and get 20% off


                                </Typography>
                                <Typography variant="body2" sx={{color : '#617d98',marginTop:'1rem'}} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?


                                </Typography>
 
                            </Box>
                        </Grid> 
                        <Grid item xs={12} md={6}>
                             
                            <TextField
                                sx={{ width: '100%' }}
     label="Enter Your Email"
                                placeholder="Your Email"
                                type="email"
                                required
      InputProps={{
        
        endAdornment: (
          <Stack direction="row" spacing={1}>
            <Button>Subscribe</Button>
          </Stack>
        ),
      }}
    />



                        </Grid>
                        
                        </Grid>
                </Box>
            
            </Container>
        </Box>
    </React.Fragment>

    
}
