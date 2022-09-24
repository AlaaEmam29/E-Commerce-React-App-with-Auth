import React from "react";
import { Contact, FeaturedProducts, HeroPage, Services } from "../../Components";

const Home = () => {
    
    return (
     
        <React.Fragment>
            
                
            <HeroPage />
            <FeaturedProducts/>
            <Services />
            <Contact/>
        </React.Fragment>
        
    );
}

export default Home;