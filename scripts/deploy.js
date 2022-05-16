const fs = require("fs");
const { parse } = require("csv-parse");
const { ethers } = require("hardhat");
const { Contract } = require("ethers");
const url = "parsed/nodes.csv";

fs.createReadStream(url)
.pipe(parse({ delimiter: ",", from_line: 2 }))
.on("data", function (node) {
    let node_i = node[0];
    let investment_class = node[1];
    let ownership_type = node[2];
    let investment_type = node[3];

    // console.log(node);
    //const hello_world = await HelloWorld.deploy(node_i, investment_class, ownership_type,investment_type );
    //const hello_world = await HelloWorld.deploy("Hello World!");
    //console.log("Contract deployed to address " + hello_world.address)
});

async function main() {
    //NFT Factory
    // const nftFactory = await ethers.getContractFactory("NFTFactory");
    // const nfts = await nftFactory.deploy();
    // console.log(nfts.address);

    //Holding Company Factory
    const hcFactory = await ethers.getContractFactory("HCFactory");
    const hcfact = await hcFactory.deploy();
    console.log(hcfact.address);

    //PE Factory
    // const peFactory = await ethers.getContractFactory("PEFactory");
    // const pefact = await peFactory.deploy(nfts.address);
    // console.log(pefact.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });