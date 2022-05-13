// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./NFTFactory.sol";

contract PrivateEquity {
    uint256 id;
    NFTFactory nftFactory;
    
    constructor(uint256 _id, address _nftFactory) {
        id = _id;
        nftFactory = NFTFactory(_nftFactory);
    }
    
    function contribute(uint256 amount) payable public{
        require(msg.value == amount);
        return;
    }

    function distribute(address payable to, uint256 amount) public {
        to.transfer(amount);
        return;
    }
}