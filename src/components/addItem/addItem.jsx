import React, { Component } from 'react';
import {ClothingTypeSelector} from '../clothingTypeSelector/clothingTypeSelector';
import {OwnerSelector} from '../ownerSelector/ownerSelector';

class AddItem extends Component {
    constructor(){
      super();  
      this.state = {selectedClothingType:"", selectedOwner:"", selectedSize:""};
    }

    render() {
      return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            console.log(this.state)}}>           
            <input type="number" value={this.state.selectedSize} onChange = {(event)=>this.setState({selectedSize:event.target.value})}/>
        <ClothingTypeSelector onChange={(event)=>this.setState({selectedClothingType:event.target.value})}/>
<OwnerSelector onChange={(event)=>this.setState({selectedOwner:event.target.value})}/>
<button type="submit">Add to {this.state.selectedOwner} wardrobe</button>
  </form>
      )
    } 

    
  }
  
  export default AddItem;
