// axios backend
const express = require('express');
var cors = require('cors');
var http = require('http');
const {port, relpath} = require('./config.js');
const {node_addr, cep78_contract_hash} = require(relpath + 'constants.js');
const {Contracts, CasperClient, DeployUtil} = require('casper-js-sdk');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + 'public/static'));
var httpServer = http.createServer(app);
httpServer.listen(port, () => {console.log("Running HTTP on ", port);});

app.post('/ids', async (req, res) => {
  console.log("/getOwnedIds request received.");
  const account_hash = req.body.account_hash;
  const client = await new CasperClient(node_addr);
  let owned = [];
  var product_contract = new Contracts.Contract(client);
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
})

// webserver route to query metadata for a set of hash identifiers
app.post('/metadata', async(req, res) => {
  const client = await new CasperClient(node_addr);
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
})

// webserver route to send deploys to a node.
app.post('/send', (req, res) => {
  const signedJson = req.body;
  console.log(signedJson);
  let signedDeploy = DeployUtil.deployFromJson(signedJson).unwrap();
  console.log("SignedDeploy: ", signedDeploy);
  signedDeploy.send(node_addr)
  .then((response) => {
    let deploy_history = readJsonFile('./data/deploys');
    deploy_history.push(response);
    writeJsonFile(deploy_history, './data/deploys');
    res.send(response);
    return;
  })
  .catch((error) => {
    console.log(error);
    return;
  });;
});
