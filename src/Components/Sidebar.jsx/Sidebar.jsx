import React from "react";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  NavLink  } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

import Badge from '@mui/material/Badge';
import { useGlobalContext } from "../../context/context";
import { useAuth0 } from "@auth0/auth0-react";

export default function Sidebar(anchor) {
  const { user } = useAuth0();

  const {
    clearCart,
    totalItems,
    StyledBadge,
    blue,
    pages,
    routes,
    toggleDrawer,
    loginWithRedirect,
    logout,
    userAccount
    } = useGlobalContext();
   
 
    return <React.Fragment>
     <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vw' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
 <Divider/>
      <Container >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.2rem',
          paddingLeft: '1rem',
          paddingTop: '1rem',
        }}>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Store
          </Typography>
          <IconButton

            onClick={toggleDrawer(anchor, false)}>
            <CloseIcon sx={{
              color: blue[500],
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }} />
          </IconButton>
        </Box>
      <List>
            {pages.map((text, index) => (

          <ListItem 
                  to={routes[index]} key={index}
                  component={NavLink}
          
            button>
            <ListItemButton  
          >
              <ListItemText
            
                primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
            {
              userAccount &&
              
              <ListItem
              
                button>
            <ListItemButton>
              <ListItemText primary='Checkout' />
            </ListItemButton>
          </ListItem>
            
            }
        </List>
         <Box sx={{  flexGrow: 1, display: 'flex' ,justifyContent: 'center' , alignItems: 'center'}}>
        
                <Box sx={{ display:'flex','justifyContent':'center','alignItems':'center' }} >                
                                  <Typography to='/cart' component={NavLink}

                    sx={{ my: 2, color: '#000 ', display: 'block', mx: 2, 'textDecoration': 'none' }}
                    variant="h6"
                  >
                    Cart
              </Typography>
               {totalItems > 0  && user? <StyledBadge badgeContent={totalItems} color="primary">
                    <ShoppingCartIcon sx={{ 'fontSize': '2rem' }} />

                  </StyledBadge> : <ShoppingCartIcon sx={{ 'fontSize': '2rem' }} />
                  }
                 
                                           {
                userAccount ? <Box onClick={() => {
                  clearCart();
                  logout({ returnTo: window.location.origin })
                }}
                    sx={{
                    display: 'flex', 'justifyContent': 'center', 'alignItems': 'center'
                    ,cursor: 'pointer'
                  }} >
                   <Typography 
                    sx={{ my: 2, color: '#000 ', display: 'block', mx: 2, 'textDecoration': 'none' }}
                    variant="h6">
                    Logout
                  </Typography>
                  <Badge
                    color="secondary"
                  >
                    <PersonRemoveIcon sx={{ 'fontSize': '2rem' }} />
                  </Badge>
                    </Box>
                      :
                       <Box onClick={loginWithRedirect} sx={{
                    display: 'flex', 'justifyContent': 'center', 'alignItems': 'center'
                    ,cursor: 'pointer'
                  }} >
                   <Typography 
                    sx={{ my: 2, color: '#000 ', display: 'block', mx: 2, 'textDecoration': 'none' }}
                    variant="h6">
                    Login
                  </Typography>
                  <Badge
                    color="secondary"
                  >
                    <PersonAddIcon sx={{ 'fontSize': '2rem' }} />
                  </Badge>
                  </Box>

                  }
                   </Box>
        
            </Box>
      </Container>
    </Box>
    </React.Fragment>;
}
