import fetch from "node-fetch";
async function fetchNodeWithTimeout(peer, options = {}) {
  const { timeout = 1000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const url = 'http://' + peer +':7777';
  const res = await fetch(url, {
    ...options,
    signal: controller.signal
  }).then(res => {
    return res;
  });
  clearTimeout(id);
  return res;
}
let peers = [
  '171.225.248.134',
  '52.70.214.247',
  '65.21.235.219',
  '195.201.167.179',
  '152.57.178.215',
  '18.236.241.197'
]

export default async function find_peer(){
  for (let peer in peers){
    try{
      const res = await fetchNodeWithTimeout(peers[peer]);
      await console.log("[SUCCESS]: ", peers[peer], " is a valid peer.");
      return peers[peer];
      break;
    }catch(e){
      await console.log("[Error]: ", peers[peer], " timed out");
    }
  }
}

async function test(){
  const res = await find_peer();
  await console.log(res);
}
