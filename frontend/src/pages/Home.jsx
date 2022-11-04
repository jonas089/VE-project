import React from 'react';
import Loading from './Loading';
import {CLPublicKey, CLAccountHash, CLValueBuilder} from 'casper-js-sdk';
import {getOwnedIds, getMetadata} from '../casper/controller.js';
export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ids : [],
        metadata : [],
        status_ids : false,
        status_meta : false
      }
    }
    render(){
      // Fetch ids once.
      if(this.state.status_ids == false){
        console.log("Account Hash: ", this.props.accounthash);
        getOwnedIds(this.props.accounthash).then(
          res => {
            if (res == null){
              console.log('Server Error.');
              // handle server error
            }
            this.setState({
              ids : res,
              metadata : this.state.metadata,
              status_ids : true,
              status_meta : this.state.status_meta
            });
          }
        );
      }
      // Fetch metadata once.
      else if(this.state.status_meta == false){
        getMetadata(this.state.ids).then(
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
      if (this.props.status == true && this.state.status_ids == true && this.state.status_meta == true){
        console.log("Metadata: ", this.state.meta);
        return(
          <div className='bg-gradient-to-l from-indigo-400 to-red-700'>
            {/* Section heading and Connect Button */}
            <div className='text-center'>
              <div className='pb-4'>
                <h1 className='text-white text-5xl py-10 font-mono'>Casper Gallery</h1>
              </div>
            </div>

            {/* Render Gallery */}
            <div className='flex flex-wrap items-stretch items-center bg-cover py-3 px-20'>
              <div className='py-3 px-3'>
                <div class="max-w-sm rounded overflow-hidden bg-white px-2 py-2">
                  <img class="w-full" src="https://nftevening.com/wp-content/uploads/2021/05/90.png" alt="placeholder punk"/>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Placeholder Punk</div>
                    <p class="text-gray-700 text-base">
                      Hello, I am a Placeholder
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Casper</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Virtual Enterprises</span>
                  </div>
                </div>
              </div>
            </div>
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
