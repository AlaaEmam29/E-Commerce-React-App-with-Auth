import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from "react-router-dom";
import { About, Cart, Home, Products, SingleProduct, Checkout, NotFound, Wrapper } from "../../pages/index.js";
import { Navbar ,Footer ,ProtectedRoute }  from '../index.js';

const App = () => {

    return (
        <React.Fragment>
            <Navbar />
            <CssBaseline />
     
            <Wrapper>
            

     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/:products/:id" element={<SingleProduct />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>

        <Route path="*" element={<NotFound />} />

                    </Routes>
            </Wrapper> 
                <Footer />


        
        </React.Fragment>
       
        
    );
}

export default App;