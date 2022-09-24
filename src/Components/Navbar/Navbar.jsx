import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink  } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Badge from '@mui/material/Badge';
import { useGlobalContext } from '../../context/context';
import Sidebar from '../Sidebar.jsx/Sidebar';
import { useAuth0 } from '@auth0/auth0-react';
export default function Navbar() {
  const { user } = useAuth0();

  const {
    totalItems,
    state,
    StyledBadge,
    pages,
    routes,
    toggleDrawer,
    loginWithRedirect,
    logout,
    userAccount,
    clearCart,

  } = useGlobalContext();

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#fff',
      },
    },
  });


  return (
    <ThemeProvider theme={lightTheme}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <AppBar position="static" >
          <Toolbar >
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                E-Store
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page, index) => (
                  
                  <Button to={routes[index]} component={NavLink} underline="none" color="inherit"
                    key={index}
                    sx={{ my: 2, color: '#000', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
                {
                  userAccount && <Button to='/checkout' component={NavLink} underline="none" color="inherit"
                   
                    sx={{ my: 2, color: '#000', display: 'block' }}
                  >
                    Checkout
                  </Button>
                }
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>

                <Box sx={{ display: 'flex', 'justifyContent': 'center', 'alignItems': 'center' }} >
                  <Typography to='/cart' component={NavLink}

                    sx={{ my: 2, color: '#000 ', display: 'block', mx: 2, 'textDecoration': 'none' }}
                    variant="h6"
                  >
                    Cart
                  </Typography>
                  {totalItems > 0  && user ? <StyledBadge badgeContent={totalItems} color="primary">
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
              <Box>

                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                  onClick={toggleDrawer('left', true)}

                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={'left'}
                  open={state['left']}
                  onClose={
                   
                      toggleDrawer('left', false)
                   
                  }
                >
                  {Sidebar('left')}
                </Drawer>


              </Box>
            </Container>

          </Toolbar>

        </AppBar>
      </Box>
    </ThemeProvider>
  )


    ;
}
