const ethers = require('ethers');

async function main() {
  // compile contracts in our code
  // compile them seperately
  // http://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
  const wallet = new ethers.Wallet('0c35cbff8ae9aebf5fd66f86d73b6de76d2b54b8145cd013996113aea05d5c54', provider);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  })