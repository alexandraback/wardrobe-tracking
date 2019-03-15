import React from 'react';
import { Input } from "antd";

// Don't forget to include the CSS styles for antd!
import "antd/dist/antd.css";
export function OwnerSelector({onChange}){
    const owners = ["Lukas", "ny"];
     return (
       <>
         {owners.map((owner,i)=>{ return(
             <React.Fragment key={`${owners}${i}`}>
               <input type="radio" name="Owner" onChange={onChange} value={owner} key={owner}/>
               {owner}
               <Input
          placeholder="What needs to be done?"
        />
             </React.Fragment>
     )})}
     </>
   )
}