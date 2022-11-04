import React from 'react';
export default class NFTviewer extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    console.log('Metadata: ', this.props.metadata);
    return(
      <div>
        {/* Render Gallery */}
        <div className='flex flex-wrap items-stretch items-center bg-cover py-3 px-20'>
          {this.props.metadata.map((meta, id) => (
          <div className='py-3 px-3'>
            <div class="max-w-sm rounded overflow-hidden bg-white px-2 py-2">
              <img class="w-full" src="https://nftevening.com/wp-content/uploads/2021/05/90.png" alt="placeholder punk"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Placeholder Punk</div>
                <p class="text-[9px] text-base">
                  {this.props.ids[id].toString()}
                </p>
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
        ))}
        </div>
      </div>
    );
  }
}