import React from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from "../../context/context";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { formatPrice } from "../../utils/helpers";

export default function ListProducts({ id, image, name, price, description }) {
  const { fetchSingleProduct } = useGlobalContext()


  const Img = styled('img')({
    display: 'block',
    width: '300px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    marginBottom: '1rem'

  });
  return <React.Fragment>

    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        width: '100%',
        flexGrow: 1,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginBottom: '20px',
      }}
    >
      <Grid container spacing={2}>

        <Grid item >
          <Img alt={name} src={image} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div" sx={{
                fontWeight: 'bold',
                letterSpacing: '0.1rem',
                textTransform: 'capitalize',
              }}>
                {name}
              </Typography>
              <Typography variant="p" gutterBottom sx={{
                lineHeight: '1.8',
                color: '#333',
              }}>
                {description}
              </Typography>

            </Grid>
            <Grid item>
              <Button variant="outlined" component={Link}
                onClick={() => {
                  fetchSingleProduct(id);
                }}
                to={`/products/${id}`}>Details</Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" component="div" sx={{
              color: '#0063cc',
            }}>
              $ {
                formatPrice(price)
              }
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </Paper>


  </React.Fragment>;
}
