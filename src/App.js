import React, { Component } from 'react';
import './App.css';
import AddItem from './components/addItem/addItem';

class App extends Component {
   render() {
    return (
      <div className="App">
    <AddItem/>
      </div>    )
  } 
}

export default App;
