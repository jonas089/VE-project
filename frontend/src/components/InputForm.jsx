import React from 'react';
function Inputform({mint, transfer}){
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [id, setId] = React.useState('');
  const [recipient, setRecipient] = React.useState('');

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
  mint("test", "test", "test");
  transfer("test", "test");
}

export default Inputform;
