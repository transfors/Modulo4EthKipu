import { ethers } from "ethers";

console.log("Hola Mundo")

const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");

async function getBlockNumber() {
    const block = await provider.getBlockNumber();
    console.log(block);
}

async function getBalance(address) {
    const balance = await provider.getBalance(address);
    console.log(ethers.formatEther(balance));
}

getBlockNumber();
getBalance("0x396343362be2A4dA1cE0C1C210945346fb82Aa49");


