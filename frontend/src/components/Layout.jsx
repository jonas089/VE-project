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
        <NavBar />
        <Status status={this.props.status}/>
        <SignerViewer publickey={this.props.publickey}/>
        <Outlet />
      </div>
    );
  }
}
