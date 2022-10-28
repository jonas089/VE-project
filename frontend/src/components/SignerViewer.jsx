import React from "react";
export default class SignerViewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1 className='text-center'>Casper Signer</h1>
        <p className='text-center'>{this.props.publickey}</p>
      </div>
    );
  }
}
