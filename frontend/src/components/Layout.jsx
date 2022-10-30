import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./Nav";
import SignerViewer from './SignerViewer'
import Status from './Status'
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Status status={this.props.status}/>
        <SignerViewer publickey={this.props.publickey} accounthash={this.props.accounthash}/>
        <NavBar />
        <Outlet />
      </div>
    );
  }
}
