import React from 'react';
import {AiFillGithub, AiOutlineSketch, AiFillCaretRight, AiFillLinkedin} from 'react-icons/ai';
function Resources() {
    return(
      <div className='bg-gradient-to-l from-indigo-400 to-red-700'>

        <p className='text-center sm:text-5xl md:text-6xl text-white py-10 overline'> Video Resources </p>

        <div className='flex justify-center'>
          <iframe className='w-full h-[480px]'
            src={`https://www.youtube.com/embed/qFT8Sho3RSQ`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <p className='text-center sm:text-2xl md:text-3xl text-white pb-10 overline'>Casper Signer - Setup and Account Creation</p>

        <div className='flex justify-center'>
          <iframe className='w-full h-[480px]'
            src={`https://www.youtube.com/embed/PoiJEZkpocI`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <p className='text-center sm:text-2xl md:text-3xl text-white pb-10 overline'>Getting Started with Smart Contracts</p>

        <div className='flex justify-center'>
          <iframe className='w-full h-[480px]'
            src={`https://www.youtube.com/embed/4C7L5lS284c`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <p className='text-center sm:text-2xl md:text-3xl text-white pb-10 overline'>Staking Casper ( earn interest )</p>

        <div className='flex justify-center'>
          <iframe className='w-full h-[480px]'
            src={`https://www.youtube.com/embed/fzFQBVaUV-k`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <p className='text-center sm:text-2xl md:text-3xl text-white pb-10 overline'>Learn to develop Decentralized Applications (Dapps)</p>

        <div className='flex justify-center'>
          <iframe className='w-full h-[480px]'
            src={`https://www.youtube.com/embed/q5nW4MUT8q4`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signer Setup"
          />
        </div>
        <p className='text-center sm:text-2xl md:text-3xl text-white pb-10 overline'>Learn to write code on the Casper Blockchain</p>

        <p className='text-center sm:text-5xl md:text-6xl text-white py-10 overline'> Deep dive into Casper </p>

        <p className='flex content-center justify-center text-white text-center sm:text-2xl md:text-3xl'><AiFillCaretRight/> Documentation for <a className='text-green-400 px-5' href='https://docs.casperlabs.io/dapp-dev-guide/'> Developers </a></p>
        <p className='flex content-center justify-center text-white text-center sm:text-2xl md:text-3xl pt-10'><AiFillCaretRight/> Documentation for <a className='text-green-400 px-5' href='https://docs.casperlabs.io/economics/'> Economists </a></p>
        <p className='flex content-center justify-center text-white text-center sm:text-2xl md:text-3xl pt-10'><AiFillCaretRight/> Documentation for <a className='text-green-400 px-5' href='https://docs.casperlabs.io/operators/'> future Operators </a></p>

        <p className='flex content-center justify-center text-center sm:text-5xl md:text-6xl text-white py-10 overline'> <AiFillGithub /> Open Source Code </p>
        <p className='text-white text-center sm:text-2xl md:text-3xl'>Casper Node<a className='text-green-400' href='https://github.com/casper-network/casper-node'> here </a></p>
        <p className='text-white text-center sm:text-2xl md:text-3xl pt-10'>CEP-78 Enhanced NFT Standard<a className='text-green-400' href='https://github.com/casper-ecosystem/cep-78-enhanced-nft'> here </a></p>
        <p className='text-white text-center sm:text-2xl md:text-3xl pt-10'>This app<a className='text-green-400' href='https://github.com/jonas089/VE-project'> here </a></p>



        <p className='text-center sm:text-5xl md:text-6xl text-white py-10 overline'> CREDITS </p>
        <p className='flex content-center justify-center text-center sm:text-2xl md:text-3xl text-white py-10'> Jonas Pauli (R&D Engineer @ Casper Association)</p>
        <a className='flex text-white text-6xl content-center justify-center' href='https://www.linkedin.com/in/jonas-pauli-a6ba38233/'><AiFillLinkedin/></a>
        <p className='flex content-center justify-center text-center sm:text-2xl md:text-3xl text-white py-10'> Dylan Ireland (Developer Relations @ Casper Association)</p>
        <a className='flex text-white text-6xl content-center justify-center' href='https://www.linkedin.com/in/dylanireland/'><AiFillLinkedin/></a>

      </div>

    );
}

export default Resources;
