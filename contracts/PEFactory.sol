// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./PrivateEquity.sol";

contract PEFactory {
    // maps private equity node_id to its corresponding smart contract address
    mapping(uint256 => address) private private_equities;
    // need to keep the address of the NFTFactory
    address nftFactory;
    event newPE(address pe);

    constructor(address _nftFactory) {
        nftFactory = _nftFactory;
    }

    function addPrivateEquity (uint256 id) public returns (address){
        PrivateEquity pe = new PrivateEquity(id, nftFactory);
        address addr = address(pe);
        private_equities[id] = addr;
        emit newPE(addr);
        return addr;
    }
}