pragma solidity ^0.8.0;
import "./IndivHC.sol";

contract HCfactory {
    address addr;
    struct HoldingCompany {
        string name;
        address hcaddr;
    }
    mapping(string => HoldingCompany) private companies;
    event HCCreated(address hcaddr, uint256 id);

    // Question: every companies intially own company shares or just consider the equities of stocks?
    function createHC(string calldata _name) external returns(address){
        // TODO: IndivHC.sol implement 후 수정할 것
        IndivHC company = new IndivHC(_name, msg.sender);
        addr = address(company);
        HoldingCompany newcompstruct = new HoldingCompany(_name, addr);
        companies[_name] = newcompstruct;
        // companies[_name].name = _name;
        // companies[_name].hcaddr = addr;
        return addr;
    }

    // function getHC(string calldata _name) external view returns(HoldingCompany){
    //     return companies[_name];
    // }

    function getHCAddr(string calldata _name) external view returns(address){
        return companies[_name].hcaddr;
    }

    function getHCName(string calldata _name) external view returns(string memory) {
        return companies[_name].name;
    }
}

/*
Holding Company Factory Contract
- Use to deploy new holding company
*/

/*
Holding Company Contract
- Tracks all assets of the company
*/

/*
Private Equity Contract
- Supports all transactions
- Return the transaction info so it can be recorded in Holding Company Contract
*/

/*
Holding Company NFT Contract
- For creating NFT for value assets
*/
