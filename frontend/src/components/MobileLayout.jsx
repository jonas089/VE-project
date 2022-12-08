import React from "react";
import {Outlet} from "react-router-dom";
import MobileNav from "./Nav";
export default class MobileLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <MobileNav />
        <Outlet />
      </div>
    );
  }
}
