import React from 'react';
import {AiFillGithub, AiOutlineSketch, AiFillCaretRight, AiFillLinkedin} from 'react-icons/ai';
function Resources() {
    return(
      <div className='bg-gradient-to-l from-indigo-400 to-red-700'>


        <p className='text-center text-3xl text-white py-10 underline'> Documentation </p>

        <p className='flex content-center justify-center text-white text-center text-xl'><AiFillCaretRight/> Documentation for <a className='text-green-400 px-5' href='https://docs.casperlabs.io/dapp-dev-guide/'> Developers </a></p>
        <p className='flex content-center justify-center text-white text-center text-xl pt-5'><AiFillCaretRight/> Documentation for <a className='text-green-400 px-5' href='https://docs.casperlabs.io/economics/'> Economists </a></p>
        <p className='flex content-center justify-center text-white text-center text-xl pt-5'><AiFillCaretRight/> Documentation for <a className='text-green-400 px-5' href='https://docs.casperlabs.io/operators/'> future Operators </a></p>

        <p className='flex content-center justify-center text-center text-3xl text-white py-10 underline'> <AiFillGithub /> Open Source Code </p>

        <p className='text-white text-center text-xl'>Casper Node<a className='text-green-400' href='https://github.com/casper-network/casper-node'> here </a></p>
        <p className='text-white text-center text-xl pt-5'>CEP-78 Enhanced NFT Standard<a className='text-green-400' href='https://github.com/casper-ecosystem/cep-78-enhanced-nft'> here </a></p>
        <p className='text-white text-center text-xl pt-5'>This app<a className='text-green-400' href='https://github.com/jonas089/VE-project'> here </a></p>

        <p className='text-center text-3xl text-white py-10 underline'> Credits </p>
        <p className='flex content-center justify-center text-center text-xl text-white py-5'> Jonas Pauli (R&D Engineer @ Casper Association)</p>
        <a className='flex text-white text-6xl content-center justify-center' href='https://www.linkedin.com/in/jonas-pauli-a6ba38233/'><AiFillLinkedin/></a>
        <p className='flex content-center justify-center text-center text-xl text-white py-5'> Dylan Ireland (Developer Relations @ Casper Association)</p>
        <a className='flex text-white text-6xl content-center justify-center' href='https://www.linkedin.com/in/dylanireland/'><AiFillLinkedin/></a>

        <p className='text-center text-3xl text-white py-10 underline'> Video Resources </p>

        <div className='flex justify-center pb-5'>
          <iframe className='aspect-video sm:w-[50%] md:w-[70%]'
            src={`https://www.youtube.com/embed/qFT8Sho3RSQ`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <div className='flex justify-center pb-5'>
          <iframe className='aspect-video sm:w-[50%] md:w-[70%]'
            src={`https://www.youtube.com/embed/PoiJEZkpocI`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <div className='flex justify-center pb-5'>
          <iframe className='aspect-video sm:w-[50%] md:w-[70%]'
            src={`https://www.youtube.com/embed/4C7L5lS284c`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <div className='flex justify-center pb-5'>
          <iframe className='aspect-video sm:w-[50%] md:w-[70%]'
            src={`https://www.youtube.com/embed/fzFQBVaUV-k`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <div className='flex justify-center'>
          <iframe className='aspect-video sm:w-[50%] md:w-[70%]'
            src={`https://www.youtube.com/embed/q5nW4MUT8q4`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>

      </div>

    );
}

export default Resources;
