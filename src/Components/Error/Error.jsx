import React from "react";
import { useGlobalContext } from "../../context/context";
import { Typography } from "@mui/material";


export default function Error() {
    const { error } = useGlobalContext();
    return <>
        <Typography variant="h6" component="div" sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '0.15rem',
            marginBottom: '50px',
            marginTop: '50px',
            color: 'red',
            textTransform: 'uppercase',

        }}>{
                error.msg === 'Product Not Found' ? 'Not Found Product wait and you will be redirected to home page' : error.msg
        } 
            </Typography>
        
        
    </>;
}
