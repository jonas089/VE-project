# OLD VERSION: https://github.com/jonas089/casper-nft-sandbox-demo

# Live

**This app is live on https://ve.cspr.university**

# Clone repo and run server

```
  $ git clone https://github.com/jonas089/VE-project
  $ cd VE-project/server
  $ node main.js
  -> server will run on localhost port 3001 (default)
```
# Host React app locally
```
  $ cd VE-project/frontend
  $ npm install
  $ npm start
  -> app will run on localhost port 3000 (default)
```

# Smart Contract Architecture - History contract not live yet
![VE Smart Contracts](https://user-images.githubusercontent.com/49498646/198291637-2d2b7df1-b508-491e-ada0-870d583ac9f5.png)
see: https://github.com/casper-ecosystem/cep-78-enhanced-nft

## Implementation
Access to History contract is restricted using caller-stack. Jonas: try to implement this. alternative: make History contract publically available if we run out of time.
I'd rather store the transaction history on-chain than at the backend. => will add a call to History in Cep78. \
Both contracts will be deployed to casper-testnet. Functionality of Cep78 won't change. \
Deploy-status will be displayed in the History panel for each deploy.

# Design Goals
- Modern, slick UI. Responsive and fun user experience.
- Easy to use interface.
- Home Page: Information and resources for learning about Casper
- App Page: All functionality / Mint, Transfer
- History Page: Deploy History

Summary: Improve Casper-Sandbox functionality and design

# Server config
- change base_url in server.js
- change root path in index.js

# Hosting
Domain: TBD
Server IP: TBD
Domain Host: NameCheap
Server Host: Linode
Hardware requirements: Unknown
