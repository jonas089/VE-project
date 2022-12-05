import fetch from "node-fetch";
import {peers} from "./peerlist.js";
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

export default async function find_peer(){
  for (let peer in peers){
    try{
      const res = await fetchNodeWithTimeout(peers[peer]);
      // This will only print to the console when running a test.
      // Not in react-dom console!
      await console.log("[Response]: ", res);
      if (res['status'] != 400){
        continue;
      }
      return peers[peer];
    }catch(e){
      // This will only print to the console when running a test.
      // Not in react-dom console!
      await console.log("[Error]: ", peers[peer], " timed out");
    }
  }
  return undefined;
}

async function test(){
  const res = await find_peer();
  await console.log(res);
}
