import React from 'react';
import {AiFillGithub, AiOutlineSketch, AiFillCaretRight, AiFillLinkedin} from 'react-icons/ai';
function Resources() {
    return(
      <div className='bg-gradient-to-l from-indigo-400 to-red-700'>

          <div className='flex flex-wrap w-full items-stretch items-center bg-cover justify-center py-3 px-20'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-3">
              <div className='max-w-sm p-6 bg-black border border-blue-300 rounded-lg shadow-md h-full w-full'>
                <p className='text-center text-3xl text-white pb-10 underline'> Documentation </p>
                <p className='flex content-center justify-center text-white text-center text-xl'> For <a className='text-blue-400 px-5' href='https://docs.casperlabs.io/dapp-dev-guide/'> Developers </a></p>
                <p className='flex content-center justify-center text-white text-center text-xl pt-5'> For <a className='text-blue-400 px-5' href='https://docs.casperlabs.io/economics/'> Economists </a></p>
                <p className='flex content-center justify-center text-white text-center text-xl pt-5'> For <a className='text-blue-400 px-5' href='https://docs.casperlabs.io/operators/'> Operators </a></p>
                <p className='flex content-center justify-center text-white text-center text-xl pt-5'> For <a className='text-blue-400 px-5' href='https://docs.casperlabs.io/staking/'> Staking </a></p>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-3">
              <div className='max-w-xl p-6 bg-black border border-blue-300 rounded-lg shadow-md h-full w-full'>
                <p className='flex content-center justify-center text-center text-3xl text-white pb-10 underline'> <AiFillGithub /> Open Source Code </p>
                <p className='text-white text-center text-xl'>Casper Node<a className='text-blue-400' href='https://github.com/casper-network/casper-node'> here </a></p>
                <p className='text-white text-center text-xl pt-5'>Javascript SDK<a className='text-blue-400' href='https://github.com/casper-ecosystem/casper-js-sdk'> here </a></p>
                <p className='text-white text-center text-xl pt-5'>Python SDK<a className='text-blue-400' href='https://github.com/casper-network/casper-python-sdk'> here </a></p>
                <p className='text-white text-center text-xl pt-5'>CEP-78 Enhanced NFT Standard<a className='text-blue-400' href='https://github.com/casper-ecosystem/cep-78-enhanced-nft'> here </a></p>
                <p className='text-white text-center text-xl pt-5'>This app<a className='text-blue-400' href='https://github.com/jonas089/VE-project'> here </a></p>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-3">
              <div className='max-w-xl py-6 px-3 bg-black border border-blue-300 rounded-lg shadow-md h-full w-full'>
                <p className='text-center text-3xl text-white pb-10 underline'> Credits </p>
                <p className='flex content-center justify-center text-center text-xl text-white py-5'> Jonas Pauli (R&D Engineer @ Casper Association)</p>
                <a className='flex text-blue-400 text-6xl content-center justify-center' href='https://www.linkedin.com/in/jonas-pauli-a6ba38233/'><AiFillLinkedin/></a>
                <p className='flex content-center justify-center text-center text-xl text-white py-5'> Dylan Ireland (Developer Relations @ Casper Association)</p>
                <a className='flex text-blue-400 text-6xl content-center justify-center' href='https://www.linkedin.com/in/dylanireland/'><AiFillLinkedin/></a>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap items-stretch items-center bg-black justify-center py-5'>

            <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-3">
            <div className='border border-blue-300'>
            <iframe className='w-full aspect-video'
              src={`https://www.youtube.com/embed/qFT8Sho3RSQ`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Signer Setup"
            />
              <div class="px-6 py-4 bg-black">
                <div class="font-bold text-xl mb-2 text-white">Install Casper Signer</div>
                <p class="text-gray-400 text-base">
                  Learn to install the "Casper Singer" chrome extension.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 bg-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">First Steps</span>
              </div>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-3">
            <div className='border border-blue-300'>
            <iframe className='w-full aspect-video'
              src={`https://www.youtube.com/embed/cR3v8AthlkQ`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Signer Setup"
            />
              <div class="px-6 py-4 bg-black">
                <div class="font-bold text-xl mb-2 text-white">Staking Casper Tokens</div>
                <p class="text-gray-400 text-base">
                  Delegate your $CSPR Tokens to a validator to earn interest.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 bg-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Investors</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Token Holders</span>
              </div>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-3">
            <div className='border border-blue-300'>
            <iframe className='w-full aspect-video'
              src={`https://www.youtube.com/embed/PoiJEZkpocI`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Signer Setup"
            />
              <div class="px-6 py-4 bg-black">
                <div class="font-bold text-xl mb-2 text-white">Programming - Smart Contracts</div>
                <p class="text-gray-400 text-base">
                  Learn to code simple "Smart Contracts" on the Casper blockchain.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 bg-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Developers</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Smart Contracts</span>
              </div>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-3">
            <div className='border border-blue-300'>
            <iframe className='w-full aspect-video'
              src={`https://www.youtube.com/embed/rE_saHopXXU`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Signer Setup"
            />
              <div class="px-6 py-4 bg-black">
                <div class="font-bold text-xl mb-2 text-white">NCTL - Local Network</div>
                <p class="text-gray-400 text-base">
                  Setup your own test network on your computer.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 bg-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Developers</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Advanced Setup</span>
              </div>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-3">
            <div className='border border-blue-300'>
            <iframe className='w-full aspect-video'
              src={`https://www.youtube.com/embed/DLI889UqLg4`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Signer Setup"
            />
              <div class="px-6 py-4 bg-black">
                <div class="font-bold text-xl mb-2 text-white">Hackathon - Workshop 1</div>
                <p class="text-gray-400 text-base">
                  Setup your own test network on your computer.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 bg-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Developers</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Build a Dapp</span>
              </div>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-3">
            <div className='border border-blue-300'>
            <iframe className='w-full aspect-video'
              src={`https://www.youtube.com/embed/fzFQBVaUV-k`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Signer Setup"
            />
              <div class="px-6 py-4 bg-black">
                <div class="font-bold text-xl mb-2 text-white">dApp Developer Series</div>
                <p class="text-gray-400 text-base">
                  Learn to develop a decentralized Application.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 bg-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Developers</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Build a Dapp</span>
              </div>
              </div>
            </div>

        </div>
        <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Casper Association</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://casper.network/" class="mr-4 hover:underline md:mr-6 text-blue-400">Website</a>
              </li>
          </ul>
      </footer>
      </div>
    );
}

export default Resources;
