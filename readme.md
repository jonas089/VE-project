# OLD VERSION: https://github.com/jonas089/casper-nft-sandbox-demo

# Setup
## localhost
open 2 cmd tabs to run the server & the app locally. \
by default, ports 3001 and 3000 will be occupied respectively. \
1. clone repo and start server \
```
  $ git clone https://github.com/jonas089/VE-project
  $ cd VE-project/server
  $ node main.js
```
server will start on localhost port **3001** (default) \
2. install requirements and run app \
```
  $ cd VE-project/frontend
  $ npm install
  $ npm start
```
app will start on localhost port **3000** (default) \
3. install Casper Signer \
![Download](https://chrome.google.com/webstore/detail/casper-signer/djhndpllfiibmcdbnmaaahkhchcoijce?hl=en) \
4. create an account with Casper Signer \
5. visit http://localhost:3000/ and press the "connect" button \
You should now see the accounthash and publickey of your Signer account in the app. 
# Design Goals
- Modern UI
- Intuitive Signer integration
- Responsive Deploys

# Configuration

# Hosting
Domain: https://ve.cspr.university
Server IP: secret
Domain Host: NameCheap
Server Host: Linode
Hardware requirements: running on 4GB Ram

# Roadmap
Development goals defined in 2 stages, pre-VE (before 12th of December) and post-VE (from 12th of December)
# Pre-VE
High Priority!
## Logging
+ Error log \
- Console logs
## Responsiveness
Improve Warnings and Signer State detection.
## Peer List
Add more peers.
## Configuration
Update configuration & doc for default page, peers and RPC port.
# Post-VE
## NCTL Explorer
Minimalistic, built-in deploy explorer using Node RPC. Written in bash and Python (Flask Restful). \
NCTL-branch as a standalone setup independent from Casper Ecosystem and Testnet.
## Testnet Node
Setup a full Testnet node (await V1.5)
## On-Chain History
![Smart Contracts](https://user-images.githubusercontent.com/49498646/198291637-2d2b7df1-b508-491e-ada0-870d583ac9f5.png)
see: https://github.com/casper-ecosystem/cep-78-enhanced-nft
### Implementation
Access to History contract is restricted => caller-stack. \
I'd rather store the transaction history on-chain than at the backend. => will add a call to History in Cep78. \
Both contracts will be deployed to casper-testnet. Functionality of Cep78 won't change. \
Deploy-status will be displayed in the History panel for each deploy.
