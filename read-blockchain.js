const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/aa672bccd0744dd1a4d9ae66c4111fd7')


async function init() {
    const blockNumber = await provider.getBlockNumber()
    console.log(`Current block number: ${blockNumber}`);
}

init();