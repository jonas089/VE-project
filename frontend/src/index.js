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
import Home from './pages/Home';
import App from './pages/App';
import Loading from './pages/Loading';
// Casper
import {Signer} from 'casper-js-sdk';
import {window_status} from './casper/plugin/lib.js';
import {fromPublic} from './casper/crypto.js';


export default function ReactApp(){
  // useState
  const [plugin, isPresent] = React.useState(false);
  const [reader, hasRead] = React.useState(false);
  const [publickey, setPublicKey] = React.useState('Not Connected');
  const [accounthash, setAccountHash] = React.useState('Not Connected');
  const [locked, isLocked] = React.useState(true);
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

  // Render page depending on useState variables
  if (plugin == false){
    return (
      <Loading/>
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
            <Route path="/" element={<Layout publickey={publickey} accounthash={accounthash} status={_status}/>}>
            <Route index element={<Home publickey={publickey} accounthash={accounthash} status={_status}/>} />
            <Route path="app" element={<App publickey={publickey} accounthash={accounthash}/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
