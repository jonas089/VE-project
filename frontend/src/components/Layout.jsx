import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./Nav";
import SignerViewer from './SignerViewer'
function Layout({publickey, accounthash, peer, isMobile}) {
  return(
    <div>
      <SignerViewer publickey={publickey} accounthash={accounthash} peer={peer}/>
      <NavBar isMobile={isMobile}/>
      <Outlet />
    </div>
  );
}

export default Layout;
