import React from 'react';
import { styled } from '@mui/material/styles';
import { Loading } from '../../Components';
import { useAuth0 } from '@auth0/auth0-react';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: '#000',
  color: 'red',
  width: 'fit-content',

  padding: theme.spacing(2),
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
}));

function Wrapper({ children }) {

  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return <Loading height='100vh'/>;
  }
    if (error) {
      return <Div>Oops... {error.message}</Div>;
    }
  return <React.Fragment>{children}</React.Fragment>;
 
}
export default Wrapper;