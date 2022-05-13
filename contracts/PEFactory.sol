// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./PrivateEquity.sol";

contract PEFactory {
    // maps private equity node_id to its corresponding smart contract address
    mapping(uint256 => address) private private_equities;

    function addPrivateEquity (uint256 id) public returns (address){
        PrivateEquity pe = new PrivateEquity(id);
        address addr = address(pe);
        private_equities[id] = addr;
        return addr;
    }
}