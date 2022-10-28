async function connection_status(){
  let status = await window.casperlabsHelper.isConnected();
  return status;
}

async function window_status(){
  if(window.casperlabsHelper != undefined){
    return true;
  }
  else{
    return false;
  }
}

function connect(){
  connection_status().then(s =>
    {
      if (s == false){
        console.log("Connecting...");
        window.casperlabsHelper.requestConnection();
      }
      else{
        console.log("Connection Status: ", s);
      }
  });
}

export {window_status, connection_status, connect}
