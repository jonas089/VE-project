import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./Nav";
import SignerViewer from './SignerViewer'
import Status from './Status'
export default class Layout extends React.Component {
  //        <Status status={this.props.status}/>
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <SignerViewer publickey={this.props.publickey} accounthash={this.props.accounthash} peer={this.props.peer}/>
        <NavBar />
        <Outlet />
      </div>
    );
  }
}
