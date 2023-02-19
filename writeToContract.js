const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider('https://goerli.infura.io/v3/aa672bccd0744dd1a4d9ae66c4111fd7')

const wallet = new ethers.Wallet('0x086f8560dec2fcfa72041538ed9f93392c9172e4cd17d2d0f78f4f5926c451f6', provider)

const zkAbi = [
    'function greet() public view returns (string memory)',
    'function setGreeting(string memory _greeting)'
];

const zkAddress = '0xa9e78E8F8da8249AEbfBde57557f0e108Adcef1B'
const zk = new ethers.Contract(zkAddress, zkAbi, provider)

async function init() {

    const contractWithWallet = zk.connect(wallet)
    // console.log(`the message: ${greet}`);
    const tx = await contractWithWallet.setGreeting("Hi bro")
    await tx.wait()

    // const greet = await zk.greet()
    // await greet.wait()
    // console.log(`the message: ${greet}`);

    console.log(zk.greet())
}

init();