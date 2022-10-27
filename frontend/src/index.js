import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/Home';
import App from './pages/App';

export default function ReactApp(){
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="app" element={<App />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
