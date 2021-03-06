// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./NFTFactory.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract PrivateEquity {
    uint256 public id;
    NFTFactory nftFactory;
    string header;

    event Contribution(address to, uint256 amount);
    event Distribution(address to, uint256 amount);

    constructor(uint256 _id, address _nftFactory) {
        id = _id;
        nftFactory = NFTFactory(_nftFactory);
        header = "https://my-json-server.typicode.com/jamesmdai/metadata/pe/";
    }

    function contribute(uint256 amount, uint256 txId) public payable {
        require(msg.value == amount);
        string memory uri = string(
            abi.encodePacked(header, Strings.toString(txId))
        );
        nftFactory.safeMint(msg.sender, uri);
        emit Contribution(msg.sender, amount);
        return;
    }

    function distribute(address payable to, uint256 amount) public {
        to.transfer(amount);
        emit Distribution(to, amount);
        return;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function topUp(uint256 amount) public payable {
        require(msg.value == amount);
        return;
    }
}
