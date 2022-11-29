// javascript constants
const cep78_contract_hash = 'hash-3df5950e29e7ba67e605002cf9d97d26b02a5327d3d64255e9912520301ef8ce';
const node_addr = 'http://135.181.208.231:7777/rpc/';
const home_route = 'http://localhost:3000/';
const api_route = 'http://127.0.0.1:';
// const api_route = 'https://some_domain/api'

// nginx routing => true, local development server => false
const is_domain = false;
const server_port = 3001;
const node_rpc_port = 7777;
module.exports = {cep78_contract_hash, node_addr, home_route, api_route, is_domain, server_port, node_rpc_port}
