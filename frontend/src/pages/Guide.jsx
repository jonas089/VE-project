// Step by Step guide for Students
/*
Requirements:
- You need to be connected to an unrestricted wifi network (your school may block ve.cspr.university or other websites)
- You need to be using a chromium based webbrowser (examples are Brave and Google Chrome)

1. Setup Casper Signer
1.1. Install the Casper Signer Plugin: https://chrome.google.com/webstore/detail/casper-signer/djhndpllfiibmcdbnmaaahkhchcoijce
1.2. Create an account: https://docs.cspr.community/docs/user-guides/SignerGuide.html

2. Fund your account on Testnet
2.1. Visit testnet.cspr.live and login using the Casper Signer Plugin
2.2. Navigate to Tools->Faucet and Request Tokens
2.3. Wait about 40 seconds for the Transaction to be confirmed

3. Mint a Pokemon NFT
3.1. Find a pokemon image using google search, example: https://www.pokewiki.de/Datei:Sugimori_025.png
from: https://www.pokewiki.de/Pikachu
Tip: Vist https://www.pokewiki.de/Pikachu, then right click on the image -> open link in new tab until you reach an url that ends with .png or .jpg
3.2. Navigate to ve.cspr.university/app
3.3. Press Connect and connect the Casper Signer Plugin to ve.cspr.university
3.4. Enter a unique name, description and the image url you copied for your Pokemon NFT
3.5. Press Mint and sign the transaction using the Casper Signer Plugin
-> A message looking like this: Mint deploy sent! Deploy Hash: 73a803eb810b38819319d88279f90c49b6417ce0083b1f03ee9a5f4a01397de2 should pop up

4. Check the Status of your NFT on the Casper blockchain
4.1. Copy the Deploy Hash e.g. 73a803eb810b38819319d88279f90c49b6417ce0083b1f03ee9a5f4a01397de2
4.2. Navigate to testnet.cspr.live and enter the Deploy Hash in the search bar.
-> Status is either successful, failed or pending
If the Status is pending, wait for the transaction to be confirmed ( usually takes anywhere between 30 and 60 seconds )
If the Status is successful navigate to ve.cspr.university/account to view your Pokemon!
4.3. Possible errors:
  Sould the mint transaction fail, make sure you have tokens in your wallet (e.g. correctly completed Setp #2).
  Another reason for a failed mint can be a duplicate (e.g. someone else owns this particular NFT).
  ve.cspr.university is stuck on Loading screen? - Make sure the Casper Signer Plugin is unlocked and re-fresh the page.
  Your mint was successful but ve.cspr.university/account doesn't display your Pokemon NFT? - Refreshing the page a few times will likely resolve this issue.

5. Send a (Pokemon) NFT to another user
5.1. navigate to ve.cspr.university/app
5.2. enter the Address of the account you want to send an NFT to.
5.3. enter the NFT hash identifier of the NFT you want to send to the chosen Address
5.4. press the Transfer button and sign the Transaction pop-up using Casper Signer Plugin
*/

import React from 'react';

export default class Guide extends React.Component {

  render(){
    return(
      <div className='flex flex-wrap items-stretch items-center px-10 py-5 bg-black'>
        <div className='w-full rounded overflow-hidden break break-after-auto px-3 py-3'>
            <h1 className='text-white text-2xl pb-5'>Requirements</h1>
            <p className='text-white px-5'>- You need to be connected to an unrestricted wifi network (your school may block ve.cspr.university or other websites)</p>
            <p className='text-white px-5'>- You need to be using a chromium based webbrowser (examples are Brave and Google Chrome)</p>

            <h1 className='text-white text-2xl pt-5 pb-5'>1. Setup Casper Signer</h1>
            <p className='text-white px-5'>1.1. Install the Casper Signer Plugin <a className='text-blue-400 px-1' href='https://chrome.google.com/webstore/detail/casper-signer/djhndpllfiibmcdbnmaaahkhchcoijce'>here</a></p>
            <p className='text-white px-5'>1.2. Create an account <a className='text-blue-400 px-1' href='https://docs.cspr.community/docs/user-guides/SignerGuide.html'>here</a></p>

            <h1 className='text-white text-2xl pt-5 pb-5'>2. Fund your account on Testnet</h1>
            <p className='text-white px-5'>2.1. Visit <a className='text-blue-400 px-1' href='https://testnet.cspr.live'>testnet.cspr.live</a> and login using the Casper Signer Plugin.</p>
            <p className='text-white px-5'>2.2. Navigate to Tools->Faucet and press the Request Tokens Button.</p>


            <h1 className='text-white text-2xl pt-5 pb-5'>3. Mint a Pokemon NFT</h1>
            <p className='text-white px-5'>3.1. Find a pokemon image using google search, example:  <a className='text-blue-400 px-1' href='https://www.pokewiki.de/images/6/6c/Sugimori_025.png'>https://www.pokewiki.de/images/6/6c/Sugimori_025.png</a> from: <a className='text-blue-400 px-1' href='https://www.pokewiki.de/Pikachu'>https://www.pokewiki.de/Pikachu</a></p>
            <p className='text-white px-5'>Tip: Vist https://www.pokewiki.de/Pikachu, then right click on the image -> open link in new tab until you reach an url that ends with .png or .jpg</p>
            <p className='text-white px-5'>3.2. Navigate to <a className='text-blue-400 px-1' href='https://ve.cspr.university/app'>ve.cspr.university/app</a></p>
            <p className='text-white px-5'>3.3. Press Connect and connect the Casper Signer Plugin to <a className='text-blue-400 px-1' href='https://ve.cspr.university/app'>ve.cspr.university</a></p>
            <p className='text-white px-5'>3.4. Enter a unique name, description and the image url you copied for your Pokemon NFT</p>
            <p className='text-white px-5'>3.5. Press Mint and sign the transaction using the Casper Signer Plugin</p>
            <p className='text-white px-5'>-> A message looking like this: Mint deploy sent! Deploy Hash: 73a803eb810b38819319d88279f90c49b6417ce0083b1f03ee9a5f4a01397de2 should pop up</p>


            <h1 className='text-white text-2xl pt-5 pb-5'>4. Check the Status of your NFT on the Casper blockchain</h1>
            <p className='text-white px-5'>4.1. Copy the Deploy Hash e.g. 73a803eb810b38819319d88279f90c49b6417ce0083b1f03ee9a5f4a01397de2</p>
            <p className='text-white px-5'>4.2. Navigate back to <a className='text-blue-400 px-1' href='https://testnet.cspr.live'>testnet.cspr.live</a> and enter the Deploy Hash in the search bar.</p>
            <p className='text-white px-5'>-> Status is either successful, failed or pending</p>
            <p className='text-white px-10'>If the Status is pending, wait for the transaction to be confirmed ( usually takes anywhere between 30 and 60 seconds )</p>
            <p className='text-white px-10'>If the Status is successful navigate to <a className='text-blue-400 px-1' href='https://ve.cspr.university/account'>ve.cspr.university/account</a> to view your Pokemon!</p>
            <p className='text-white px-5'>4.3. Possible errors:</p>
            <p className='text-white px-10'>Sould the mint transaction fail, make sure you have tokens in your wallet (e.g. correctly completed Setp #2).</p>
            <p className='text-white px-10'>Another reason for a failed mint can be a duplicate (e.g. someone else owns this particular NFT).</p>
            <p className='text-white px-10'><a className='text-blue-400 px-1' href='https://ve.cspr.university'>ve.cspr.university</a> is stuck on Loading screen? - Make sure the Casper Signer Plugin is unlocked and re-fresh the page.</p>
            <p className='text-white px-10'>Your mint was successful but <a className='text-blue-400 px-1' href='https://ve.cspr.university/account'>ve.cspr.university/account</a> doesn't display your Pokemon NFT? - Refreshing the page one or two times will likely resolve this issue.</p>

            <h1 className='text-white text-2xl pt-5 pb-5'>5. Send a (Pokemon) NFT to another user</h1>
            <p className='text-white px-5'>5.1. navigate to <a className='text-blue-400 px-1' href='https://ve.cspr.university/app'>ve.cspr.university/app</a></p>
            <p className='text-white px-5'>5.2. enter the Address of the account you want to send an NFT to.</p>
            <p className='text-white px-5'>5.3. enter the NFT hash identifier of the NFT you want to send to the chosen Address</p>
            <p className='text-white px-5'>5.4. press the Transfer button and sign the Transaction pop-up using <a className='text-blue-400 px-1' href='https://chrome.google.com/webstore/detail/casper-signer/djhndpllfiibmcdbnmaaahkhchcoijce'>Casper Signer Plugin</a></p>

          <h1 className='text-white text-2xl pt-5 pb-5 text-center'>Learn more at <a className='text-blue-400 px-1' href='https://ve.cspr.university/'>ve.cspr.university</a></h1>
        </div>
      </div>
    );
  }
}
