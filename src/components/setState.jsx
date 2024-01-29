import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class setState extends Component {
    constructor(props) {
     super(props) 
         this.state = {   
          make: "Yamaha",   
          model: "MT15",   
          color: "Gray"   
        };  
      }
     changeBikeColor = () => {
        this.setState(
            {
                color: "blue"
            }
            );  
      }      
     render() {
    return (
      <div>
         <h2>My {this.state.make}</h2>
         <p>
          It is a {this.state.color} 
          {this.state.model}
        </p>
      <Button
         variant='primary'
          onClick={this.changeBikeColor} >
            Change color
          </Button>
      </div>
    )
  }
}
