import React from 'react';

export function ClothingTypeSelector({onChange}){
     const clothingTypes = ["Tröja", "Byxor", "T-shirt"];
      return (
        <>
          {clothingTypes.map((clothingType,i)=>{ return(
               <React.Fragment key={`${clothingTypes}${i}`}>
                <input type="radio" name="ClothingType" onChange={(event)=> onChange(event)} key={clothingType} value={clothingType} />
                {clothingType}
              </React.Fragment>
      )})}
      </>
    )
}