import React from "react";

export default function Loading({ height }) {

   if(height){
       return (
        <div className="loader" style={{ height: '100vh' }}>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
       )
   } else {
         return (
          <div className="loader" >
     <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
     </div>
         )
    }
        
        
   
}
