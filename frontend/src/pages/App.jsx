import React from 'react';
import Inputform from '../components/InputForm.jsx';
import {Mint, Transfer} from '../casper/controller.js';
export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  mint(name, description, url){
    Mint(name, description, url, this.props.accounthash, this.props.publickey).then(
      res => {
        console.log("Mint result: ", res);
      }
    )
  }
  transfer(id, recipient){
    Transfer(id, recipient, this.props.accounthash, this.props.publickey).then(
      res => {
        console.log("Transfer result: ", res);
      }
    )
  }
  render(){
    return(
      <Inputform mint={this.mint} transfer={this.transfer}/>
    );
  }
}
