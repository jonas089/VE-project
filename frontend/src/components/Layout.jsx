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
        <Status p2={this.props.p2} p3={this.props.p3} status={this.props.status}/>
        <SignerViewer publickey={this.props.publickey}/>
        <Outlet />
      </div>
    );
  }
}
