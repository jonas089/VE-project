import React from 'react';
import Loading from './Loading';
import Inputform from '../components/InputForm.jsx';
import {Mint, Transfer} from '../casper/controller.js';
import {CLPublicKey, CLAccountHash} from 'casper-js-sdk';

import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

function mint(name, description, url, accounthash, publickey, notify, peer){
  console.log("ongoing minting process...");
  Mint(name, description, url, accounthash, publickey, notify, peer).then(
    res => {
      console.log('async minting in progress...');
    }
  );
}
function transfer(id, recipient, accounthash, publickey, notify, peer){
  Transfer(id, recipient, accounthash, publickey, notify, peer).then(
    res => {
      console.log("async transfer in progress...");
    }
  );
}
// notification
function notify(title, message){
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

// Return loading if not connected, otherwise render app input forms.
export default function App({publickey, peer}) {
  if (publickey == 'Wallet is Locked'){
    return(
      <Loading/>
    );
  }
  else{
    const _fromHex = CLPublicKey.fromHex(publickey).toAccountHash();
    const account_as_clkey = new CLAccountHash(_fromHex);
    return(
      <div>
        <Inputform peer={peer} mint={mint} transfer={transfer} notify={notify} accounthash={account_as_clkey} publickey={publickey}/>
        <Toaster />
      </div>
    );
  }
}
