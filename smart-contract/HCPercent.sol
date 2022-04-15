pragma solidity ^0.8.0;

import "./SafeMath.sol";
import "./EIP20Interface.sol";

contract HCPercent is EIP20Interface {
    using SafeMath for uint256;

    string public name;
    string public symbol;
    uint256 id;
    string class;
    string currency;
    string ownership_type;
    string investment_type;
    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowed;
    mapping(uint256 => Transactions) trx;   // key: trx_id (from trx_effect.csv)    value: Transactions
    struct Transactions {
        uint256 trx_id;
        uint256 trx_value;
        string trx_date;
        string trx_type;
        uint256 edge_id;
        string currency;
        bool is_credit;
    }
    struct Edges {
        uint256 edge_id;
        uint256 from_node_id;
        uint256 to_node_id;
    }
    
    constructor(uint256 _initialSupply, uint256 _id, string _class, string memory _name,
        string _currency, string _owntype, string _investype, string memory _symbol) public {
            balances[msg.sender] = _initialSupply;               // Give the creator all initial tokens
            totalSupply = _initialSupply;                        // Update total supply
            symbol = _symbol;                                    // Set the symbol of token to _symbol
            name = _name;                                        // Set the name of token to _name

            id = _id;
            class = _class;
            currency = _currency;
            ownership_type = _owntype;
            investment_type = _investype;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value, "Not enough balance"); // Ensure number of tokens sent is less than 10 
        require(_to != address(0));
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        emit Transfer(msg.sender, _to, _value); 
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value, "Not enough balance or Not enough allowance");
        balances[_to] = balances[_to].add(_value);
        balances[_from] = balances[_from].sub(_value);
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value); // Decrement allowance 
        emit Transfer(_from, _to, _value); 
        return true;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner]; 
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        require(_spender != address(0));
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value); 
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }

    // TODO
    function recordTrx() public {
        return;
    }

    // get transaction info
    // TODO: Get transaction info (return trx[...])
    function getTrxInfo() public {

    }
}