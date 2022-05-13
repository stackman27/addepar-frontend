pragma solidity ^0.8.0;
import "./AssetFactory.sol";

// TODO:
// 1. Event check
// 2. Get the address of the asset intending to interact & do the transaction
// 3. Transaction struct -> transaction value type

// Question : 
// 1. For company shares, who holds tokens initially? to whom are we distributing?
// 2. Edge fees -> how are we paying the agents? By company shares? or ...?

contract IndivHC is Ownable {
    using SafeMath for uint256;
    // IERC20 private company_shares;
    string name;
    address addr;
    struct Asset {
        uint256 id;
        string class;
        string name;
        string currency;
        string ownership_type;
        string investment_type;
        address assetAddr;
    }
    struct CommitInfo {
        uint256 from_node_id;
        uint256 to_node_id;
        uint256 amount;
        uint scheduled_date;
    }
    event TransactionOccured(address tr, uint256 transaction_id);
    mapping(uint256 => Asset) assets; // key: id (node id)    value: Asset Struct
    mapping(uint256 => []CommitInfo);
    // company_shares = EIP20Interface(_company_shares);
    // address _company_shares
    constructor(string _name, address _owner) public {
        name = _name;
        owner = _owner;
    }
    // Retrieve the address of asset contract
    // Do the following Company -> PE transactions
    // On the Equity side : handle the incoming requests

    /* Transaction Basics:
        1. Obtain the asset contract ids by node ids
        2. Do the appropriate transaction based on the type of the asset & type of the transaction
     */
    // Company -> PE transactions :
    // 1. Commitment (uint256 from_nod_id, uint256 to_node_id)
    // 2. Commitment Reduction
    // 3. Contribution
    // 4. Edge fee

    function createValBasedAsset(uint256 _id, string _class, string _name, string _currency, string _owntype, string _investype) external returns(address) {
        ValBasedAsset valAsset = new ValBasedAsset();
        addr = address(valAsset);
        Asset newasset = new Asset(_id, _class, _name, _currency, _owntype, _investype, addr);
        assets[_id] = newasset;
        // assets[_id].id = _id;
        // assets[_id].class = _class;
        // assets[_id].name = _name;
        // assets[_id].currency = _currency;
        // assets[_id].ownership_type = _owntype;
        // assets[_id].investment_type = _investype;
        // assets[_id].assetAddr = addr;
        return addr;
    }

    function createPerBasedAsset(uint256 _id, string _class, string _name, string _currency, string _owntype, string _investype, string _symbol) external returns(address) {
        PerBasedAsset perAsset = new PerBasedAsset();
        addr = address(perAsset);
        Asset newasset = new Asset(_id, _class, _name, _currency, _owntype, _investype, addr);
        assets[_id] = newasset;
        // assets[_id].id = _id;
        // assets[_id].class = _class;
        // assets[_id].name = _name;
        // assets[_id].currency = _currency;
        // assets[_id].ownership_type = _owntype;
        // assets[_id].investment_type = _investype;
        // assets[_id].assetAddr = addr;
        return addr;
    }

    // Future: include from_node_id
    // For now: most of the transactions are from holding company, except for 2 transactions, took out 
    function commitment(uint256 to_node_id, uint256 amount, uint schedule) external {
        address to_asset = assets[to_node_id].assetAddr;

        CommitInfo newcommit = new CommitInfo(from_node_id, to_node_id, amount, schedule);

        from_asset.transfer(amount ether);

    }

    function commitReduction(uint256 from_node_id, uint256 to_node_id, uint256 deductamount) public {

    }

    function contribution(uint256 from_node_id, uint256 to_node_id, uint256 amount) public {

    }
}


// TODO:
// LEVEL 1. Only company share caring case
// LEVEL 2. NFT added

// Listing flow:
// 1. For each company -> list equities
// 2. For each equities -> list transactions

// function createValAsset(uint256 _id, string _class, string _name, string _currency, string _owntype, string _investype) external returns(address) {
//     HCValued pe = new HCValued();
//     addr = address(pe);
//     equities[_id].id = _id;
//     equities[_id].class = _class;
//     equities[_id].name = _name;
//     equities[_id].currency = _currency;
//     equities[_id].ownership_type = _owntype;
//     equities[_id].investment_type = _investype;
//     return addr;
// }
// // Shares are hardcoded initially
// function createPerAsset(uint256 _id, string _class, string _name, string _currency, string _owntype, string _investype, string _symbol) external returns(address) {
//     HCPercent pe = new HCPercent(100000, _id, _class, _name, _currency, _owntype, _investype, _symbol);
//     addr = address(pe);
//     equities[_id].id = _id;
//     equities[_id].class = _class;
//     equities[_id].name = _name;
//     equities[_id].currency = _currency;
//     equities[_id].ownership_type = _owntype;
//     equities[_id].investment_type = _investype;
//     return addr;