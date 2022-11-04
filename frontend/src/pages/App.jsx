import React from 'react';
import Inputform from '../components/InputForm.jsx';
import {Mint, Transfer} from '../casper/controller.js';
import { CLPublicKey, CLAccountHash } from 'casper-js-sdk';
function mint(name, description, url, accounthash, publickey){
  console.log("Mint Parameter List: ", name, description, url, accounthash, publickey);
  Mint(name, description, url, accounthash, publickey).then(
    res => {
      console.log("Mint result: ", res);
    }
  )
}
function transfer(id, recipient, accounthash, publickey){
  Transfer(id, recipient, accounthash, publickey).then(
    res => {
      console.log("Transfer result: ", res);
    }
  )
}
export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    if (this.props.publickey == 'Not Connected'){
      return(
        <h1>Loading...</h1>
      );
    }
    else{
      const _fromHex = CLPublicKey.fromHex(this.props.publickey).toAccountHash();
      const account_as_clkey = new CLAccountHash(_fromHex);
      return(
        <Inputform mint={mint} transfer={transfer} accounthash={account_as_clkey} publickey={this.props.publickey}/>
      );
    }
  }
}
