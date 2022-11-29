// Send Deploys through axios server to make Deploys and Query state
import axios from 'axios';
import { RuntimeArgs, CLValueBuilder, Contracts, CasperClient, DeployUtil, CLPublicKey, Signer, CLAccountHash } from 'casper-js-sdk';
import { cep78_contract_hash, node_addr, api_route, is_domain } from './constants.js';
const port = 3001;

var base_url = null;
if (is_domain == true){
  base_url = api_route;
}
else{
  base_url = api_route + port.toString();
}

async function getOwnedIds(account_hash, peer){
    const client = await new CasperClient(peer);
    const data = {
      "account_hash": account_hash,
      "peer": peer
    }
    const owned = await axios.post(base_url + "/ids",
    data,
    {headers: {'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'}})
    .then((response) => {
        const owned = response.data;
        return owned
    })
    .catch((error) => {
        return null
    });
    return owned;
}

async function getPeer(){
  await console.log("Initiating Peer request.");
  const peer = await axios.get(base_url + "/peer")
  .then((response) => {
      const p = response.data;
      return p
  })
  .catch((error) => {
      return null
  });
  await console.log("Peer chosen: ", peer);
  return peer;
}

async function getMetadata(list, peer){
    const client = await new CasperClient(node_addr);
    const data = {
      "list": list,
      "peer": peer
    }
    const meta = await axios.post(base_url + "/metadata",
    data,
    {headers: {'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'}})
    .then((response) => {
        const meta = response.data;
        return meta
    })
    .catch((error) => {
        return null
    });
    return meta;
}


// COMPLETE
async function Mint(name, description, url, account_hash, activeKey, parent, peer){
    console.log("Minting at Peer: ", peer);
    console.log("CLAccountHash: ", account_hash);
    const metadata =
        JSON.stringify({
            "nft_name": name,
            "nft_description": description,
            "nft_url": url
    });
    console.log("Metadata: ", CLValueBuilder.string(metadata));
    const args = RuntimeArgs.fromMap({
        'token_owner': CLValueBuilder.key(account_hash),
        'token_meta_data':CLValueBuilder.string(
             metadata)
            // Following the Sandbox deploy schema:
            //'{\"nft_name\":\"somename01\",\"nft_description\":\"somedescription01\",\"nft_url\":\"someurl01\"}'
    });

    const pubkey = CLPublicKey.fromHex(activeKey);
    const client = await new CasperClient(node_addr);
    const contract = new Contracts.Contract(client);
    contract.setContractHash(cep78_contract_hash);
    const result = contract.callEntrypoint("mint", args, pubkey, "casper-test", "3000000000", [], 10000000);
    const deployJson = DeployUtil.deployToJson(result);
    console.log("DeployJson: ", deployJson);

    var _status = false;
    const _req = await Signer.sign(deployJson, activeKey).then((success) => {
      _status = true;
      return success;
    }).catch((error) => {
      console.log(error);
      _status = false;
      return error;
    });
    if (_status == true){
      const res = await sendDeploy(_req, parent, peer);
      await console.log("Deploy Result message print: ", res);
      parent.notify("Mint deploy sent! Deploy Hash: ", res.toString());
    }
    else{
      parent.notify("Error: ", "This error is unhandled, it should never occur!");
    }
}
// UNDER CONSTRUCTION
async function Transfer(id, recipient, AccountHash, activeKey, parent, peer){
    console.log("Transferring Token...");
    const accountHex = CLPublicKey.fromHex(recipient).toAccountHash();
    const clKeyAccHash = new CLAccountHash(accountHex);
    const args = RuntimeArgs.fromMap({
        'token_hash': CLValueBuilder.string(id),
        'source_key': CLValueBuilder.key(AccountHash),
        'target_key': CLValueBuilder.key(clKeyAccHash)
            // Sandbox deploy schema looks like this:
            //'{\"nft_name\":\"somename01\",\"nft_description\":\"somedescription01\",\"nft_url\":\"someurl01\"}'
    });
    const pubkey = CLPublicKey.fromHex(activeKey);
    const client = await new CasperClient(node_addr);
    const contract = new Contracts.Contract(client);
    contract.setContractHash(cep78_contract_hash);
    console.log("Contract: ", contract);
    // paying fixed fee of 3 cspr for a transfer
    console.log("Pubkey: ", pubkey);
    const result = contract.callEntrypoint("transfer", args, pubkey, "casper-test", "3000000000", [], 10000000);
    const deployJson = DeployUtil.deployToJson(result);
    console.log("DeployJson: ", deployJson);
    var _status = false;
    const _req = await Signer.sign(deployJson, activeKey).then((success) => {
      _status = true;
      return success;
    }).catch((error) => {
      console.log(error);
      _status = false;
      return error;
    });
    if (_status == true){
      const res = await sendDeploy(_req, parent, peer);
      await console.log("Deploy Result message print: ", res);
      parent.notify("Transfer deploy sent! Deploy Hash: ", res.toString());
    }
    else{
      parent.notify("Error: ", "This error is unhandled, it should never occur!");
    }
}

// Send any signed Deploy to a webserver, no need to touch this function.
async function sendDeploy(signedJson, parent, peer){
    var res = '';
    try{
      const data = {
        "signedJson": signedJson,
        "peer": peer
      }
      res = await axios.post(base_url + "/send",
      data,
      {headers: {'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'}})
      .then((response) => {
          const hash = response.data;
          console.log("Deploy response:", response.data);
          console.log("Parsed Hash: ", hash);
          return hash;
      })
      .catch((error) => {
          console.log("Deploy Error: ", error);
          return error;
      });
    }
    catch(error){
      console.log("Axios Error: ", error);
      res = error;
    }
    return res;
}
export {Mint, Transfer, getOwnedIds, getMetadata, getPeer};
