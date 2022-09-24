/* eslint-disable no-unused-vars */
/* eslint-disable no-self-assign */
import React ,{ useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useGlobalContext } from "../../context/context";
import { useEffect } from "react";
export default function Sort() {
    const {gridView ,toggleGridView , filterProducts,setFilterProducts} = useGlobalContext()
     const [values, setValues] = useState([
    "Price: Low to High",
    "Price: High to Low",
    "Name: A to Z",
         "Name: Z to A",
    
  ]);
  const [sorted, setSorted] = useState('');

  function updateSorted(event) {
    const value = event.target.value;
    setSorted(value);    
  }
  const sortProducts = () => {
  let tempProducts = [...filterProducts];
    if (sorted === 'Price: Low to High') {
  
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    
    }
    if (sorted === 'Price: High to Low') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sorted === 'Name: A to Z') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sorted === 'Name: Z to A') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    if (sorted === '') {
    
   
      tempProducts = tempProducts.sort((a, b) => {
        return a.id - b.id;
      });
      
    }
    setFilterProducts(tempProducts);

  }
  useEffect(() => {
    sortProducts();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorted]);
    return <React.Fragment>
        <Box sx={{ display: 'flex',  alignItems: 'center', marginBottom: '2rem' ,justifyContent: 'space-between'}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ViewModuleIcon
                    onClick={toggleGridView}
                    className={gridView ? 'activeSort' : ''}
                    sx={{ fontSize: '1.5rem', border: '1px solid black', borderRadius: '5px', cursor: 'pointer' }} />
                <ViewHeadlineIcon
                    onClick={toggleGridView}
                    className={!gridView ? 'activeSort' : ''}
                    sx={{ fontSize: '1.5rem', border: '1px solid black', mx: 1, borderRadius: '5px', cursor: 'pointer' }} />
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600, fontSize: '1.25rem' }}>
                    {filterProducts.length} Products
                </Typography>
            </Box>
         <FormControl>
        <FormHelperText>Sort By</FormHelperText>
      <Select
        value={sorted}
            onChange={updateSorted}
        displayEmpty
        inputProps={{
          name: "sort",
          id: "sort-simple"
        }}
          >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>


        {values.map((value, index) => {
          return <MenuItem key={index} value={value}>{value}</MenuItem>;
        })}
      </Select>
    </FormControl>
        </Box>
    </React.Fragment>;
}
