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

export default function ReactApp(){
  // useState
  const [plugin, isPresent] = React.useState(false);
  const [connection, isConnected] = React.useState(false);
  const [publickey, setPublicKey] = React.useState('');
  const [locked, isLocked] = React.useState(true);
  // status bar
  let p2 = 0;
  let p3 = 0;
  let _status = '';
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
  // custom implementation of helperPresent
  useEffect(() => {
    setTimeout(() => {
      window_status().then(s => {
        if (s == true){
          isPresent(true);
        }
        else{
          console.log("Waiting for Signer...");
        }
      });
    }, 1000); // check whether Signer is present ever 1 second
  });
  // Render page depending on useState variables
  if (plugin == false){
    return (
      <Loading/>
    );
  }
  else if (connection == false){
    if (!Signer.isConnected()){
      Signer.sendConnectionRequest();
    }
    Signer.getActivePublicKey().then(p => {
      setPublicKey(p);
      isLocked(false);
    });
    isConnected(Signer.isConnected());
    return(
        <Loading/>
    );
  }
  else{
    if (locked == false){
      p2 = '4';
      p3 = '4';
      _status = 'Status: Ready.';
    }
    else{
      p2 = '4';
      p3 = '1';
      _status = 'Status: Signer is Locked.';
    }
    return(
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout publickey={publickey} p2={p2} p3={p3} status={_status}/>}>
            <Route index element={<Home />} />
            <Route path="app" element={<App />} />
            </Route>
          </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
