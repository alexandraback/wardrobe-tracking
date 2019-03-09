import React from 'react';

export function OwnerSelector({onChange}){
    const owners = ["Lukas", "ny"];
     return (
       <>
         {owners.map((owner,i)=>{ return(
             <React.Fragment key={`${owners}${i}`}>
               <input type="radio" name="Owner" onChange={onChange} value={owner} key={owner}/>
               {owner}
             </React.Fragment>
     )})}
     </>
   )
}