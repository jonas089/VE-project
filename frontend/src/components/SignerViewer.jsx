import React from "react";
export default class SignerViewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='flex text-center justify-center bg-gradient-to-l from-indigo-400 to-red-700'>
        <div className="flex flex-wrap items-center mt-1">
            <div className="ml-12">
                <p className="text-xs text-white">Public Key</p>
                <p className="text-xs mt-3 text-white pb-6">{this.props.publickey}</p>
            </div>
            <div className="ml-12">
                <p className="text-xs text-white">Account Hash</p>
                <p className="text-xs mt-3 text-white pb-6">{this.props.accounthash}</p>
            </div>
        </div>
      </div>
    );
  }
}
