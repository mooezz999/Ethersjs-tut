const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/aa672bccd0744dd1a4d9ae66c4111fd7')


async function init() {
    const balance = await provider.getBalance('vitalik.eth')
    const formattedBalance = ethers.formatEther(balance)
    console.log(`Balance: ${balance}`);
    console.log(`Balance: ${formattedBalance}`);
}

init();