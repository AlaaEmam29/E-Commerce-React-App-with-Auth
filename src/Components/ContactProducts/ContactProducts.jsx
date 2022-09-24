import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputUnstyled from '@mui/base/InputUnstyled';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../../context/context';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


import { formatPrice } from '../../utils/helpers';
const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 100%;
  
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
`,
);

export default function ContactProducts() {
  const {   
    clearFilter, filters, updateFilter, products, getUniqueValue
    
    
  } = useGlobalContext()
            const categories = getUniqueValue(products, 'category')
            const companies = getUniqueValue(products, 'company')
            const colors = getUniqueValue(products,'colors')


  const { text, company, minPrice, maxPrice, price, shipping } = filters;

    const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.only('md'));
  const styles = {
    position: 'sticky',
  

}

  return <React.Fragment>


    <Grid item xs={12} md={3}
      sx={{
        position: {
        
          sm:"relative",
          md: "sticky"
         
        },
    top: "0",
  height: "100%",
        marginBottom: "20px",
           



      }}
    >
        <FormControl sx={{
        m: 1, 
      }}
        component="form"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputUnstyled components={{ Input: StyledInputElement }} placeholder="search…"
          name='text'
          value={text}
          onChange={updateFilter}
        />
                 <Typography variant="h6" >
                Categories
        </Typography>
       
       {
            categories.map((item, index) => {
              return <button key={index}
                type='button'
                className='filter-btn'
                onClick={updateFilter}
                 name='category'
              value={item}
              >
         {item}
        </button> 
            
        })
          }
     
        <MenuList>
         
                 


                <Divider />
          </MenuList>
              <Box>
             
                             <Typography variant="h6"  sx={{
                    color: '#000',
                    fontSize: '1rem',
                    fontWeight: '600',
                    letterSpacing: '0.1rem',
                  }}>
                Company
              </Typography>

           
          <select 
            name="company"
            value={company}
            onChange={updateFilter}
            className='btn'

          >
            
            {
             companies.map((item, index) => {

               return <option key={index} value={item}>{ item}</option>
     })
          }

  </select>


     
              </Box>
          <Box sx={{ 
            margin:'1rem 0'
          }} >
               
            <FormLabel id="demo-row-radio-buttons-group-label"
              sx={{ 
              fontWeight: '600',
            }}>Colors</FormLabel>
           
      <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              id="row-radio-buttons-group"
              sx={{
                "&  *": {                 
                  pl: 0,
                }
              }}
          >
         
             {
              colors.map((item, index) => {
                const itemColor = item === 'all' ? 'default' : item
                return <FormControlLabel
                 
                  key={index}
                  name='color'
                  onChange={updateFilter}
                  value={item} control={<Radio
                   sx={{
          color: itemColor,
          '&.Mui-checked': {
            color: itemColor,
          },
        }}
                  />} label={item === 'all' ? 'All' : ''} />
              })
            }
           
       
      </RadioGroup>
               </Box>

              <Box >
                <Typography variant="h6" >
                Price
                </Typography>
                <Typography variant="body2" >
             {formatPrice(price)}  $
              </Typography>
          <Slider aria-label="Volume" 
            name='price'    
            value={price}
            valueLabelDisplay="auto" 
            onChange={updateFilter}
            min={minPrice}
            max={maxPrice}

          />
              </Box>
              <Box>
          <FormControlLabel
            name='shipping'
            onChange={updateFilter}
            value={shipping}
            control={<Checkbox />}
          
          label="Free Shipping"
          labelPlacement="end"
        />
              </Box>
        <Button variant="contained" color="error" sx={{ marginTop: "1rem" }}
        onClick={clearFilter}
        >
  Clear Filters
          </Button>
           </FormControl>
          </Grid>
  </React.Fragment>;
}
