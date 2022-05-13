const fs = require("fs");
const { parse } = require("csv-parse");
const url = "parsed/transactions.csv";

fs.createReadStream(url)
.pipe(parse({ delimiter: ",", from_line: 2 }))
.on("data", function (tx) {
    let tx_i = tx[0];
    let date = tx[1];
    let transaction_type = tx[2];
    let e_i =  tx[3];
    let e_tx_i =  tx[4];
    let e_edge_i =  tx[5];
    let e_currency =  tx[6];
    let e_is_credit =  tx[7];
    
    //const hello_world = await HelloWorld.deploy(tx_i,date,transaction_type,e_i,e_tx_i,e_edge_i,e_currency,e_is_credit);
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