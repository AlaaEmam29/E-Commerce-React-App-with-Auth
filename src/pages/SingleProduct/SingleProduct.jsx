import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Error, Loading, Tabs } from "../../Components";
import { useGlobalContext } from "../../context/context";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { formatPrice } from "../../utils/helpers";
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function SingleProduct() {

  const Img = styled('img')({
    display: 'block',
    width:'500px',
    maxWidth: '100%',
    maxHeight: '100%',
    
    fitContent:'cover !important'
    

  });
  const List = styled('div')({
    maxWidth: '200px',


    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    marginTop: '10px',
    textTransform: 'capitalize',
    
  });
  const { id } = useParams()
  const navigate = useNavigate()
  const { singleProduct, fetchSingleProduct, loading, error,addToCart,increase,decrease,amount } = useGlobalContext();
  useEffect(() => {
    fetchSingleProduct(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (error.show) {
      setTimeout(() => {
        error.show = false
        navigate('/')
      }, 3000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])
let [selectedValue, setSelectedValue] = useState("#000");
const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  
  if (loading) {
    return <Loading height='100vh' />
  }
  
  if (error.show) {
    return <Error />
  }
  
  let {
    name,
    price,
    description,
    colors,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = singleProduct;

  const { url } = images[0]
  let status = 'available'
  if (stock === 0) {
    stock = 'out of stock'
    status = 'unavailable'
  }
  else {
    stock = 'in stock'
    status = 'available'
  }

  let text = [stock, sku, company]
  let text2 = [status, "SKU", "Brand"]

  const img = images.map((image) => {
    return <Grid item xs={12} sm={6} md={4} key={image.id}>
      <ButtonBase sx={{
        maxWidth: '100%', height: '100%',
        padding: '5px',


      }}>
        <Img alt={image.name} src={image.url} sx={{
          border: '1px solid #007fff',
          borderRadius: '5px',
          height: '80px'
        }} />
      </ButtonBase>
    </Grid>
  })



  return (


    <React.Fragment>
      <Box>
        <Tabs nameTab='Products' product={name} />

        <Container maxWidth="lg" >
          <Box sx={{ margin: '50px 0' }}>
            <Button variant="contained"
              sx={{
                marginBottom: '50px',
              }}
              component={Link} to='/products'>Back To Products</Button>
            <Paper
              sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                marginBottom: '50px',

              }}
            >
              <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                  <Img alt={name} src={url} className='fixed-height'/>
                  <Box sx={{
                    display: 'flex', justifyContent: 'center'
                  ,maxWidth:'500px'
                  }}>
                    {img}
                  </Box>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h4" sx={{
                        textTransform: 'capitalize',
                      }}>
                        {name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', }}>
                        <Rating name="half-rating-read" defaultValue={stars} precision={0.5} readOnly />
                        <Typography variant="body2" gutterBottom sx={{
                          marginLeft: '10px',
                          marginBottom: '0',
                        }}>
                          ({reviews} reviews)
                        </Typography>
                      </Box>


                      <Typography variant="body1" color="text.secondary" sx={{
                        marginBottom: '10px',
                        marginTop: '10px',
                        lineHeight: '1.7',
                        textTransform: 'capitalize',

                      }}>
                        {description}
                      </Typography>
                      <Box sx={{ margin: '20px 0' }}>
                        {
                          Array.from({ length: 3 }, (_, index) => {

                            return <List key={index}>
                              <Typography variant="button" color="text.secondary" >{text2[index]}:</Typography>

                              <Typography variant="subtitle2" color={
                                text[index] === 'out of stock' ? 'error.main' : 'text.secondary'
                              } >{text[index]}</Typography>

                            </List>
                          })
                        }

                      </Box>
                      <Divider />
                    </Grid>
                    <Grid item xs>
                      <Box >
                        <List >
                          <Typography variant="button" color="text.secondary" >Colors:</Typography>

                          <div>
                            {colors.map((color, index) => {
                              return <Radio

                                key={index}
                                checked={selectedValue === color}
                                onChange={handleChange}
                                value={color}
                                name="radio-buttons"
                                required
                                inputProps={{ 'aria-label': color }}
                                sx={{
                                  color: color,
                                  '&.Mui-checked': {
                                    color: color,
                                  },
                                }}
                              />
                            })}
                          </div>
                        </List>
                      </Box>
                      {
                        stock === 'in stock' &&
                        <React.Fragment>
                            
                      
                         <Box sx={{
                        display: 'flex', alignItems: 'center',
                      marginBottom: '20px',
                      }}>
                        <Typography sx={{
                          cursor: 'pointer',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',

                          
                        }} variant="h5" onClick={increase}><AddIcon /></Typography>
                        <Typography sx={{ 
                          margin: '0 15px',
                          
                        }} variant="h4">{amount}</Typography> 
                        <Typography  sx={{
                          cursor: 'pointer',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }} variant="h5"
                        onClick={decrease}
                        >
                        <RemoveIcon/>
                        </Typography>
 
                      </Box>
                       <Button variant="contained"
                        onClick={() => {
                        addToCart(sku, selectedValue,amount,singleProduct)
                        }}
                        component={Link} to='/cart'
                            >ADD TO CART</Button>
                        </React.Fragment>
                          }
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" component="div" sx={{
                      color: '#007fff',
                    }}>
                      {formatPrice(price)}$
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>

          </Box>
        </Container>
      </Box>
    </React.Fragment>

  )

}

