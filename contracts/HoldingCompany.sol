// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./PrivateEquity.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";


contract HoldingCompany is IERC721Receiver {
    string public name;
    event CommitOccurred(address to, uint256 amount);
    event TransferOccurred(address to, uint256 amount);
    
    mapping(address => uint256) commitments;

    constructor(string memory _name) {
        name = _name;
    }
    
    // User commits a certain amount of holding company's funds to a private equity
    function commit(address to, uint256 amount) public returns (uint256) {
        uint256 curr = commitments[to];
        uint256 new_amount = curr + amount;
        commitments[to] = new_amount;
        emit CommitOccurred(to, new_amount);
        return new_amount;
    }

    // User reduces the commitment of holding company's funds to private equity by certain amount
    function commitReduction(address to, uint256 amount) public returns (uint256) {
        uint256 curr = commitments[to];
        uint256 new_amount;
        if (curr - amount < 0) {
            new_amount = 0;
        } else {
            new_amount = curr - amount;
        }
        commitments[to] = new_amount;
        emit CommitOccurred(to, new_amount);
        return new_amount;
    }

    // User contributes amount of holding company's funds to private equity
    function contribute(address to, uint256 amount, uint256 txId) public returns (uint256) {
        commitments[to] = 0;
        PrivateEquity pe = PrivateEquity(to);
        pe.contribute{value: amount}(amount, txId);
        emit TransferOccurred(to, amount);
        return 0;
    }
    function getBalance() public view returns(uint256) {
        return address(this).balance;
    }
    function topUp(uint256 amount) payable public {
        require(msg.value == amount);
        return;
    }
    function onERC721Received(
    address, 
    address, 
    uint256, 
    bytes calldata
    ) external override (IERC721Receiver) returns(bytes4) {
    return bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
} 
}