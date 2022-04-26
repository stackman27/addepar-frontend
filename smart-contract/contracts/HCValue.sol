// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


// TODO:
// 1. Create NFT for value asset
// 2. Mint created NFT
// 3. Burn created NFT
// 4. Support transfer

contract HVValue is ERC721, Ownable {
    string name;
    string symbol;
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
    // Reference: https://github.com/ProjectOpenSea/meta-transactions/blob/main/contracts/ERC721MetaTransactionMaticSample.sol
    constructor (string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        name = _name;
        symbol = _symbol;
        //transaction_id = ;
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}


