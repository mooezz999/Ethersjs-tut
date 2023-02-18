const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/aa672bccd0744dd1a4d9ae66c4111fd7')

const usdcAbi = [
    'function balanceOf(address) view returns (uint)',
    'function decimals() view returns (uint)'
];

const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
const usdc = new ethers.Contract(usdcAddress, usdcAbi, provider)

async function init() {
    const balance = await usdc.balanceOf('vitalik.eth')
    const decimals = await usdc.decimals()
    const formattedBalance = ethers.formatUnits(balance, decimals)
    console.log(`Balance: ${balance}`);
    console.log(`Decimals= ${decimals}`)
    console.log(`Balance: ${formattedBalance}`);
}

init();