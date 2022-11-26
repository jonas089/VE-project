import React from 'react';
function Inputform({peer, mint, transfer, faucet, accounthash, publickey, parent}){
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [id, setId] = React.useState('');
  const [recipient, setRecipient] = React.useState('');

  // input handlers
  const handleName = event => {
    setName(event.target.value);
  };
  const handleDescription = event => {
    setDescription(event.target.value);
  };
  const handleUrl = event => {
    setUrl(event.target.value);
  };
  const handleId = event => {
    setId(event.target.value);
  }
  const handleRecipient = event => {
    setRecipient(event.target.value);
  }
  // mint arguments from child: name, description, url
  // transfer arguments from child: id, recipient
  return(
    <div className='bg-gradient-to-l from-indigo-400 to-red-700'>

    <button onClick={() => faucet(publickey, parent, peer)} className="bg-green-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Claim
    </button>

      <div className='grid py-[5%] place-items-center divide-x'>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name..." onChange={handleName} value={name}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
                Description
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="description..." onChange={handleDescription} value={description}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="url">
                Url
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="url" type="text" placeholder="https://some.url/" onChange={handleUrl} value={url}/>
            </div>

            <div className="grid place-items-center">
              <button onClick={() => mint(name, description, url, accounthash, publickey, parent, peer)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Mint
              </button>
            </div>
          </form>

          <form className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
                Hash Id
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Id" type="text" placeholder="Token Hash Id..." onChange={handleId} value={id}/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="url">
                Recipient
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Recipient" type="text" placeholder="0x00" onChange={handleRecipient} value={recipient}/>
            </div>

            <div className="grid place-items-center">
              <button onClick={() => transfer(id, recipient, accounthash, publickey, parent, peer)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Transfer
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Inputform;
