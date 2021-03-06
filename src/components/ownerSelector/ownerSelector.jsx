import React from 'react';
import { Input } from "antd";

// Don't forget to include the CSS styles for antd!
import "antd/dist/antd.css";
export function OwnerSelector({onChange}){
    const owners = ["Lukas", "ny"];
     return (
       <>
         {owners.map((owner,i)=>{ return(
             <>
               <input type="radio" name="Owner" onChange={onChange} value={owner} key={owner}/>
               {owner}             
             </>
     )})}
       <Input
          placeholder="new wardrobe"
        />
     </>
   )
}