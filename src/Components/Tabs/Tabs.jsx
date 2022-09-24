import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { NavLink  } from 'react-router-dom';



export default function Tabs({ nameTab, product }) {
    
    return (
    <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb" sx={{
          padding: '2rem',
          backgroundColor: '#007fff',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
     
          flexDirection: 'column',
       "&  li": {
         position: 'relative',
         textDecoration: 'none',
         left: '7rem',
          letterSpacing: '0.1rem',
          },
          "&  h4 , h4:hover": {
            textDecoration: 'none',
            cursor: ' default',
          },
          "& a": { 
fontSize: '2.2rem',          },

          
      }}>
        <Link underline="hover" color="#1c2b4f" to='/' component={NavLink}>
          Home
        </Link>

          {nameTab === 'Products' ?
            <Link
             underline="hover" color="#1c2b4f" to='/products' component={NavLink}>
          {nameTab}
            </Link>
            :
             <Link
            component={"h4"}
            underline="hover"
          color="inherit"
        >
          {nameTab}
          </Link>
        }
          {product && 
             <Link
              component={"h4"}
              underline="hover"
              color="inherit"
              sx={{
                textTransform: 'capitalize',
              }}
        >
          {product}
        </Link>
          }
          
      </Breadcrumbs>
    </div>
  );
}
