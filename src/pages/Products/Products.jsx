import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ContactProducts, Sort ,Products as ProductView, ListProducts } from '../../Components';
import { useGlobalContext } from '../../context/context';

export default function Products() {
  const { gridView, filterProducts } = useGlobalContext()

  const productsView = filterProducts.map((product) => {
    return <ProductView key={product.id} {...product} />
  })
  const productsList = filterProducts.map((product) => {
    return <ListProducts key={product.id} {...product} />
  })
  return <React.Fragment>

    <Box sx={{ minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ marginTop: '4rem', marginBottom: '4rem'}}>
        <Grid container spacing={2} className="test">
         <ContactProducts/>
          <Grid item md={9}>
            <Box>
              <Sort />
              <Grid container spacing={2}>
              {
                  gridView ? productsView : productsList
                }
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </React.Fragment>;
}
