// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./HoldingCompany.sol";

contract HCFactory {
    mapping(string => address) private companies;
    event HCCreated(address hcaddr, string name);

    function createHC(string calldata _name) external returns (address) {
        HoldingCompany company = new HoldingCompany(_name);
        address addr = address(company);
        emit HCCreated(addr, _name);
        companies[_name] = addr;
        return addr;
    }

    function getHCAddr(string calldata _name) external view returns (address) {
        return companies[_name];
    }
}
