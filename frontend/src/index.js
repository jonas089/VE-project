import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components and Pages
import Layout from './components/Layout';
import SignerViewer from './components/SignerViewer';
import Home from './pages/Home';
import App from './pages/App';

// Casper
import {Signer} from 'casper-js-sdk';
import {window_status, connection_status, connect} from './casper/plugin/lib.js';

export default function ReactApp(){
  // useState
  const [plugin, isPresent] = React.useState(false);
  const [connection, isConnected] = React.useState(false);
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
      <div>
        <h1>Waiting for Signer...</h1>
      </div>
    );
  }
  else if (connection == false){
    if (!Signer.isConnected()){
      Signer.sendConnectionRequest();
    }
    isConnected(Signer.isConnected());
    return(
      <div>
        <h1>Signer present. Connect to Website...</h1>
      </div>
    );
  }
  else{
    return(
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout publickey={'0x0000'}/>}>
            <Route index element={<Home />} />
            <Route path="app" element={<App />} />
            </Route>
          </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
