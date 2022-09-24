import React from "react";
import { Tabs } from "../../Components";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import aboutImg from '../../assets/images/hero-bcg.a876f19f.jpeg';

const About = () => {
      const Img = styled('img')({
    margin: 'auto',
    display: 'Block',
    maxWidth: '100%',
    maxHeight: '100%',
  
});

    return (
     
        <div>
        <Tabs nameTab='About'/> 
            <Container maxWidth="lg" sx={{ 
                marginTop: '4rem',
                marginBottom: '4rem',
            }}>
            <Grid container spacing={7}>
                    <Grid item xs={12} md={6}>
                        <Img src={aboutImg} alt='e-commerce-about-information'/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box >
                            <Typography variant='h3' sx={{
                                fontWeight:'bold',
                                letterSpacing:'0.1rem',
                                
                            }}>Our Store</Typography>
                            <Box sx={{
                                width: '20%',
                                height: '5px',
                                backgroundColor:"#007fff",
                            }}></Box>
                            <Typography variant='body1' sx={{
                                marginTop: '2rem',
                                marginBottom: '2rem',
                                lineHeight: '1.8',
                                color: '#555',
                            }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.


                            </Typography>
                        </Box>
                        </Grid>
                    </Grid>
                </Container>
        </div>
        
    );
}

export default About;