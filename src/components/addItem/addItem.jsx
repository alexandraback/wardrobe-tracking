import React, { Component } from 'react';
import {ClothingTypeSelector} from '../clothingTypeSelector/clothingTypeSelector';
import {OwnerSelector} from '../ownerSelector/ownerSelector';
import {Form, Input, Button} from 'antd';

class AddItem extends Component {
    constructor(){
      super();  
      this.state = {selectedClothingType:"", selectedOwner:"", selectedSize:""};
    }

    render() {
      return (
        <Form onSubmit={(event)=>{
            event.preventDefault();
}}>         
<Form.Item label="choose a size">
            <Input type="number" value={this.state.selectedSize} onChange = {(event)=>this.setState({selectedSize:event.target.value})}/>
        <ClothingTypeSelector onChange={(event)=>this.setState({selectedClothingType:event.target.value})}/>
<OwnerSelector onChange={(event)=>this.setState({selectedOwner:event.target.value})}/>
</Form.Item>  
<Button type="submit">Add to {this.state.selectedOwner} wardrobe</Button>
  </Form>
      )
    } 

    
  }
  
  export default AddItem;
