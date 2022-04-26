pragma solidity ^0.8.0;

import "./HCValue.sol";
import "./HCPercent.sol";

// TODO:
// LEVEL 1. Only company share caring case
// LEVEL 2. NFT added

// Listing flow:
// 1. For each company -> list equities
// 2. For each equities -> list transactions

contract IndivHC is Ownable {
    using SafeMath for uint256;
    EIP20Interface private company_shares;
    mapping(uint256 => PrivateEquity) equities; // key: id (node id)    value: PrivateEquity
    string name;
    // TODO: Event check
    event PrivateEquityCreated(address pe, uint256 id);
    // event TransactionOccured(address tr, uint256 transaction_id);
    // TODO: Struct check
    struct PrivateEquity {
        uint256 id;
        string class;
        string name;
        string currency;
        string ownership_type;
        string investment_type;
    }

    // TODO: Check EIP20Interface(_company_shares); where exactly, Percent or Indiv?
    constructor(string _name, address _company_shares, address _owner) public {
        name = _name;
        company_shares = EIP20Interface(_company_shares);
        owner = _owner;
    }
    // Able to create private equities
    // TODO: Complete after completing HCValue.sol
    function createValEq(uint256 _id, string _class, string _name, string _currency, string _owntype, string _investype) external returns(address) {
        HCValued pe = new HCValued();
        addr = address(pe);
        equities[_id].id = _id;
        equities[_id].class = _class;
        equities[_id].name = _name;
        equities[_id].currency = _currency;
        equities[_id].ownership_type = _owntype;
        equities[_id].investment_type = _investype;
        return addr;
    }
    function createPerEq(uint256 _id, string _class, string _name, string _currency, string _owntype, string _investype, string _symbol) external returns(address) {
        HCPercent pe = new HCPercent(100000, _id, _class, _name, _currency, _owntype, _investype, _symbol);
        addr = address(pe);
        equities[_id].id = _id;
        equities[_id].class = _class;
        equities[_id].name = _name;
        equities[_id].currency = _currency;
        equities[_id].ownership_type = _owntype;
        equities[_id].investment_type = _investype;
        return addr;
    }
    // TODO: Support all types of transactions
    // function percValTrx(uint256 _amount, string _owntype) public {
    //     require(_amount > 0, "The amount must be greater than 0");
    //     require(_owntype == "PERCENT_BASED", "The asset must be percent based");

    //     return;
    // }
}