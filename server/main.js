// axios backend
import express from 'express';
import cors from 'cors';
import http from 'http';
import {port} from './config.js';
import {cep78_contract_hash} from '../frontend/src/casper/constants.js';
import find_peer from '../experimental/connect.js';
import pkg from 'casper-js-sdk';
const {Contracts, CasperClient, DeployUtil} = pkg;
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function Server(){
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.static(__dirname + 'public/static'));
  var httpServer = http.createServer(app);
  httpServer.listen(port, () => {console.log("Running HTTP on ", port);});


  app.post('/ids', async (req, res) => {
    try{
      const peer = req.body.peer;
      const node_addr = 'http://' + peer + ':11101/rpc/';
      console.log("/getOwnedIds request received.");
      const account_hash = req.body.account_hash;
      const client = await new CasperClient(node_addr);
      let owned = [];
      var product_contract = new Contracts.Contract(client);
      console.log(cep78_contract_hash);
      product_contract.setContractHash(cep78_contract_hash);
      const result = await product_contract.queryContractDictionary(
        "owned_tokens", // hardcoded as part of NFT standard.
        account_hash
      ).then(response => {
        for (let i = 0; i < response.data.length; i++){
          owned.push(response.data[i].data);
        };
        return owned;
      }).catch(error => {
        const e = "Failed to find base key at path"
        if (error.toString().includes(e.toString())) {
          console.log("Account does not own any tokens");
        }
        else{
          console.log(error);
        }
        return []
      })
      await res.send(owned);
    }
    catch(e){
      console.log("Server Error: ", e);
    }
  })

  // webserver route to query metadata for a set of hash identifiers
  app.post('/metadata', async(req, res) => {
    try{
      const peer = req.body.peer;
      const node_addr = 'http://' + peer + ':11101/rpc/';

      const client = await new CasperClient(node_addr);
      console.log("client set.");
      var product_contract = new Contracts.Contract(client);
      product_contract.setContractHash(cep78_contract_hash);
      const list = req.body.list;
      let meta = [];
      for (let item of list) {
        await product_contract.queryContractDictionary(
          "metadata_custom_validated",
          item
        )
        .then(response => {
          meta.push(response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }
      await res.send(meta);
    }
    catch(e){
      console.log("Server Error", e);
    }
  })

  app.get('/peer', async (req, res) => {
    try{
      const peer = await find_peer().then(p => {return p;});
      res.send(peer);
    }
    catch(e){
      console.log("Server Error: ", e);
    }
    }
  )

  // webserver route to send deploys to a node.
  app.post('/send', (req, res) => {
    try{
      const peer = req.body.peer;
      const node_addr = 'http://' + peer + ':11101/rpc/';
      console.log("deploying to: ", node_addr);
      const signedJson = req.body.signedJson;
      console.log(signedJson);
      let signedDeploy = DeployUtil.deployFromJson(signedJson).unwrap();
      console.log("SignedDeploy: ", signedDeploy);
      signedDeploy.send(node_addr)
      .then((response) => {
        res.send(response);
        return;
      })
      .catch((error) => {
        console.log(error);
        return;
      });;
    }
    catch(e){
      console.log("Server Error: ", e);
    }
  });
}
Server();
