import React from 'react';
import Loading from './Loading';
import Inputform from '../components/InputForm.jsx';
import {Mint, Transfer} from '../casper/controller.js';
import {CLPublicKey, CLAccountHash} from 'casper-js-sdk';

import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";


// Return loading if not connected, otherwise render app input forms.
export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  mint(name, description, url, accounthash, publickey, parent, peer){
    console.log("ongoing minting process...");
    Mint(name, description, url, accounthash, publickey, parent, peer).then(
      res => {
        console.log('async minting in progress...');
      }
    );
  }
  transfer(id, recipient, accounthash, publickey, parent, peer){
    Transfer(id, recipient, accounthash, publickey, parent, peer).then(
      res => {
        console.log("async transfer in progress...");
      }
    );
  }
  // notification
  notify(title, message){
    toast.custom(
      (t) => (
        <div
          className={classNames([
            t.visible ? "top-0" : "-top-96",
            'bg-green-500',
            'text-white',
            'rounded-3xl',
            'px-5',
            'py-5',
            'text-center'
          ])}
        >
          <div className='flex content-center justify-center text-center'>
            <HiLightningBolt className='text-xl'/>
          </div>
          <div className=''>
            <h1>{title}</h1>
            <p>
              {message}
            </p>
          </div>
        </div>
      ),
      { id: "unique-notification", position: "top-center" }
    );
  }
  render(){
    if (this.props.publickey == 'Not Connected'){
      return(
        <Loading/>
      );
    }
    else{
      const _fromHex = CLPublicKey.fromHex(this.props.publickey).toAccountHash();
      const account_as_clkey = new CLAccountHash(_fromHex);
      return(
        <div>
          <Inputform peer={this.props.peer} mint={this.mint} transfer={this.transfer} accounthash={account_as_clkey} publickey={this.props.publickey} parent={this}/>
          <Toaster />
        </div>
      );
    }
  }
}
