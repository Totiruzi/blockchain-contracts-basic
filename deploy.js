const ethers = require('ethers');
const fs = require('fs');

async function main() {
  // compile contracts in our code
  // compile them seperately
  // http://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
  const wallet = new ethers.Wallet('0c35cbff8ae9aebf5fd66f86d73b6de76d2b54b8145cd013996113aea05d5c54', provider);
  const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8');
  const bytecode = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.bin', 'utf8');
  // A contract factory is a JavaScript object that is able to deploy a contract on the blockchain.
  const contractFactory = new ethers.ContractFactory(abi, bytecode, wallet);
  console.log('Please wait while the contract is being deployed...'); 
  const contract = await contractFactory.deploy();
  console.log(contract);
  console.log('Contract deployed at:', contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  })