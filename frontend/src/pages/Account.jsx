import React from 'react';
import Loading from './Loading';
import {CLPublicKey, CLAccountHash, CLValueBuilder} from 'casper-js-sdk';
import {getOwnedIds, getMetadata} from '../casper/controller.js';
import NFTviewer from '../components/NFTViewer.jsx';
export default function Account({publickey, accounthash, peer, status}) {
  const [ids, setIds] = React.useState(null);
  const [metadata, setMetadata] = React.useState(null);
  const [status_ids, setStatusIds] = React.useState(false);
  const [status_meta, setStatusMeta] = React.useState(false);
  // check if props are loaded
  if (publickey == 'Wallet is Locked' || accounthash == 'Wallet is Locked'){
    return(
      <Loading/>
    )
  }
  // Fetch ids once.
  else if(status_ids == false){
    console.log("Account Hash: ", accounthash);
    console.log("Selected Peer: ", peer);
    getOwnedIds(accounthash, peer).then(
      res => {
        if (res == null){
          console.log('Server Error.');
          // handle server error
        }
        else{
          console.log("IDs fetched: ", res);
          setIds(res);
          setStatusIds(true);
        }
      }
    );
  }
  // Fetch metadata once.
  else if(status_meta == false && status_ids == true){
    getMetadata(ids, peer).then(
      meta => {
        setMetadata(meta);
        setStatusMeta(true);
      }
    );
  }
  // Conditional Render
  if (status == true && status_ids == true && status_meta == true && ids != null && metadata != null){
    return(
      <div className='bg-gradient-to-l from-indigo-400 to-red-700'>
        {/* Section heading and Connect Button */}
        <div className='text-center'>
          <div className='pb-4'>
            <h1 className='text-white text-5xl py-10 font-mono'>Casper Gallery</h1>
          </div>
        </div>

        <NFTviewer metadata={metadata} ids={ids}/>
      </div>
    );
  }
  else{
    return(
      <Loading/>
    );
  }
}
