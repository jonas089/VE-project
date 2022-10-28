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
        <NavBar />
        <SignerViewer publickey={this.props.publickey}/>
        <Outlet />
      </div>
    );
  }
}
