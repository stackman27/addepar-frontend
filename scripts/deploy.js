const fs = require("fs");
const { parse } = require("csv-parse");
const { ethers } = require("hardhat");
const { Contract } = require("ethers");

const url = "parsed/nodes.csv";
const hcFactory_json = require("../artifacts/contracts/HCFactory.sol/HCFactory.json");
const holdingCompany_json = require("../artifacts/contracts/HoldingCompany.sol/HoldingCompany.json");
const nftFactory_json = require("../artifacts/contracts/NFTFactory.sol/NFTFactory.json");
const peFactory_json = require("../artifacts/contracts/PEFactory.sol/PEFactory.json");
const privateEquity_json = require("../artifacts/contracts/PEFactory.sol/PrivateEquity.json")

const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

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

async function setUp() {
    // NFT Factory
    const nftFactory = await ethers.getContractFactory("NFTFactory");
    const nfts = await nftFactory.deploy();
    console.log(nfts.address);

    // Holding Company Factory
    const hcFactory = await ethers.getContractFactory("HCFactory");
    const hcfact = await hcFactory.deploy();
    console.log(hcfact.address);

    // const hcFactContract = new ethers.Contract(hcfact.address, hcFactory_json.abi, signer);
    // const tx = await hcFactContract.createHC("Madison Square Holding Company");

    // PE Factory
    const peFactory = await ethers.getContractFactory("PEFactory");
    const pefact = await peFactory.deploy(nfts.address);
    console.log(pefact.address);
}

setUp()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });