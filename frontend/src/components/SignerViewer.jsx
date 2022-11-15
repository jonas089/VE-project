// this Component is considered complete.
import React from "react";
export default class SignerViewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Test:", this.props.peer);
    if (this.props.peer == ''){
      return(
        <div className='flex justify-center bg-gradient-to-l from-indigo-400 to-red-700'>
          <div className="flex flex-wrap mt-3 justify-center">
              <div className="ml-12 mr-5">
                  <p className="text-xl text-white">Public Key (use for NFT transfers)</p>
                  <p className="text-xs mt-3 text-white pb-6">{this.props.publickey}</p>
              </div>
              <div className="ml-5 mr-10">
                  <p className="text-xl text-white ml-12">Selected RPC Peer</p>
                  <p className="text-xs mt-3 text-red-400 pb-6 ml-5">Error: All peers offline</p>
              </div>
              <div className="mr-12 ml-5">
                  <p className="text-xl text-white">Account Hash</p>
                  <p className="text-xs mt-3 text-white pb-6">{this.props.accounthash}</p>
              </div>
          </div>
        </div>
      );
    }
    else{
      return(
        <div className='flex justify-center bg-gradient-to-l from-indigo-400 to-red-700'>
          <div className="flex flex-wrap mt-3 justify-center">
              <div className="md:ml-12 md:mr-5 sm:ml-12 sm:mr-5">
                  <p className="text-xl text-white">Address</p>
                  <p className="text-xs mt-3 text-white pb-6">{this.props.publickey}</p>
              </div>
              <div className="md:ml-5 md:mr-12 ml-5">
                  <p className="text-xl text-white">Selected RPC Peer</p>
                  <p className="text-xs mt-3 text-green-400 pb-6">{this.props.peer}</p>
              </div>
              <div className='ml-5'>
                  <p className="text-xl text-white">Account Hash</p>
                  <p className="text-xs mt-3 text-white pb-6">{this.props.accounthash}</p>
              </div>
          </div>
        </div>
      );
    }
  }
}
