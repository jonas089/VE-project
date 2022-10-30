import React from 'react';
import {Signer} from 'casper-js-sdk';
export default class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
      return(
        <div className='bg-gradient-to-l from-indigo-400 to-red-700'>
          <div className='text-center'>
            <h1 className='text-white text-7xl py-10 font-mono'>Gallery</h1>
            <button className='bg-indigo-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => Signer.sendConnectionRequest()}>Connect Signer</button>
          </div>
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
}
