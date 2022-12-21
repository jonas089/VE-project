import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./Nav";
import SignerViewer from './SignerViewer'
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <SignerViewer publickey={this.props.publickey} accounthash={this.props.accounthash} peer={this.props.peer}/>
        <NavBar isMobile={this.props.isMobile}/>
        <Outlet />
      </div>
    );
  }
}
