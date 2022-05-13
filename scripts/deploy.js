const fs = require("fs");
const { parse } = require("csv-parse");
const url = "parsed/nodes.csv";

fs.createReadStream(url)
.pipe(parse({ delimiter: ",", from_line: 2 }))
.on("data", function (node) {
    let node_i = node.node_i;
    let investment_class = node.investment_class;
    let ownership_type = node.ownership_type;
    let investment_type = node.investment_type;

    console.log(node);
    //const hello_world = await HelloWorld.deploy(node_i, investment_class, ownership_type,investment_type );
    //const hello_world = await HelloWorld.deploy("Hello World!");
    //console.log("Contract deployed to address " + hello_world.address)
});

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });