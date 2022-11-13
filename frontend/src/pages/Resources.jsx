import React from 'react';
function Resources() {
    return(
      <div className='bg-gradient-to-l from-indigo-400 to-red-700'>

        <p className='text-center text-5xl text-white py-10 underline'> Video Resources </p>


        <div className='flex justify-center'>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/PoiJEZkpocI`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <p className='text-center text-3xl text-white pb-10 overline'>Getting Started with Casper Smart Contracts</p>



      </div>
    );
}

export default Resources;
