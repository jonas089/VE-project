import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// Components and Pages
import Layout from './components/Layout';
import Account from './pages/Account';
import App from './pages/App';
import Loading from './pages/Loading';
import Resources from './pages/Resources';
import Status from './pages/Status';
// Casper
import {Signer} from 'casper-js-sdk';
import {window_status} from './casper/plugin/lib.js';
import {fromPublic} from './casper/crypto.js';
import {getPeer} from './casper/controller.js';

export default function ReactApp(){
  // useState
  const [plugin, isPresent] = React.useState(false);
  const [reader, hasRead] = React.useState(false);
  const [publickey, setPublicKey] = React.useState('Not Connected');
  const [accounthash, setAccountHash] = React.useState('Not Connected');
  const [locked, isLocked] = React.useState(true);
  const [peer, setPeer] = React.useState(undefined);
  const [lookPeer, setlookPeer] = React.useState(true);
  // status
  let _status = false;
  // Event Listener for connect and disconnect event
  window.addEventListener("signer:connected", (msg) => {
    // perform an action
    console.log("Signer: connected.");
  });
  window.addEventListener("signer:disconnected", (msg) => {
    // reconnect
    // Signer.sendConnectionRequest();
    console.log("Signer: disconnected.");
  });

  // on app load seek for active peer.
  // tbd: handle no active peer.
  if (lookPeer == true){
    getPeer().then(p => {
      setPeer(p);
    });
    setlookPeer(false);
  }
  // Check for signer every 1 second until Signer is found.
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Looking for Signer...');
      window_status().then(s => {
        if (s == true){
          isPresent(true);
          console.log('Signer found.');
          clearInterval(interval);
        }
        else{
          console.log('Signer not present.');
        }
      })
    }, 1000);
  }, []);

  // RENDER
  if (plugin == false || peer == undefined){
    // Loading until Signer present and peer found.
    return (
      <div>
        <Status/>
        <Resources/>
      </div>
    );
  }
  else if (reader == false && publickey == 'Not Connected'){
    Signer.getActivePublicKey().then(p => {
      setPublicKey(p);
      setAccountHash(fromPublic(p));
      console.log("Account Hash: ", accounthash);
      isLocked(false);
    });
    hasRead(true)
    return(
        <Loading/>
    );
  }
  else {
    if (locked == false){
      _status = true;
    }
    else{
      _status = false;
    }
    return(
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout publickey={publickey} accounthash={accounthash} status={_status} peer={peer}/>}>
            <Route path='/account' element={<Account publickey={publickey} accounthash={accounthash} status={_status} peer={peer}/>} />
            <Route index element={<Resources/>}/>
            <Route path="app" element={<App publickey={publickey} accounthash={accounthash} peer={peer}/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
