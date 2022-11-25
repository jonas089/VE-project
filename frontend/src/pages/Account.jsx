import React from 'react';
import Loading from './Loading';
import {CLPublicKey, CLAccountHash, CLValueBuilder} from 'casper-js-sdk';
import {getOwnedIds, getMetadata} from '../casper/controller.js';
import NFTviewer from '../components/NFTViewer.jsx';
export default class Account extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ids : null,
        metadata : null,
        status_ids : false,
        status_meta : false
      }
    }
    render(){
      // check if props are loaded
      if (this.props.publickey == 'Wallet is Locked' || this.props.accounthash == 'Wallet is Locked'){
        return(
          <Loading/>
        )
      }
      // Fetch ids once.
      else if(this.state.status_ids == false){
        console.log("Account Hash: ", this.props.accounthash);
        console.log("Selected Peer: ", this.props.peer);
        getOwnedIds(this.props.accounthash, this.props.peer).then(
          res => {
            if (res == null){
              console.log('Server Error.');
              // handle server error
            }
            else{
              console.log("IDs fetched: ", res);
              this.setState({
                ids : res,
                metadata : this.state.metadata,
                status_ids : true,
                status_meta : this.state.status_meta
              });
            }
          }
        );
      }
      // Fetch metadata once.
      else if(this.state.status_meta == false && this.state.status_ids == true){
        getMetadata(this.state.ids, this.props.peer).then(
          meta => {
            this.setState({
              ids : this.state.ids,
              metadata : meta,
              status_ids : true,
              status_meta : true
            });
          }
        );
      }
      // Conditional Render
      if (this.props.status == true && this.state.status_ids == true && this.state.status_meta == true && this.state.ids != null && this.state.metadata != null){
        console.log("State: ", this.state.ids);
        console.log("State: ", this.state.metadata);
        console.log("Account Hash: ", this.props.accounthash);
        return(
          <div className='bg-gradient-to-l from-indigo-400 to-red-700'>
            {/* Section heading and Connect Button */}
            <div className='text-center'>
              <div className='pb-4'>
                <h1 className='text-white text-5xl py-10 font-mono'>Casper Gallery</h1>
              </div>
            </div>

            <NFTviewer metadata={this.state.metadata} ids={this.state.ids}/>
          </div>
        );
      }
      else{
        return(
          <Loading/>
        );
      }
    }
}
