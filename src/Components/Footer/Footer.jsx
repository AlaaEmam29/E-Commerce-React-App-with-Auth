import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
export default function Footer() {
    const blue = {
  500: '#007FFF',
};


    return (

        <Box component="footer"
            sx={{
                backgroundColor: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center',
             padding: '0.75rem 0', color: '#fff', fontSize: '1.2rem'   
    }} >
          
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    © {new Date().getFullYear()} <span style={{ color: blue[500] ,letterSpacing:'0.2rem',marginLeft:'0.2rem'}}>E-Store</span> 
<br />
                    All Rights Reserved
                    </Typography>



                </Toolbar>

        </Box>
    )


        ;
}
