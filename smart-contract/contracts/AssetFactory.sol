pragma solidity ^0.8.0;
import "./ValBasedAsset.sol";
import "./PerBasedAsset.sol";

contract AssetFactory {
    address addr;
    struct Asset {
        uint256 id;
        string class;
        string name;
        string currency;
        string ownership_type;
        string investment_type;
        address assetAddr;
    }
    mapping(uint256 => Asset) assets; // key: id (node id)    value: Asset Struct

    function createValBasedAsset(uint256 _id, string _class, string _name, string _currency, string _owntype, string _investype) external returns(address) {
        ValBasedAsset valAsset = new ValBasedAsset();
        addr = address(valAsset);
        Asset newasset = new Asset(_id, _class, _name, _currency, _owntype, _investype, addr);
        assets[_id] = newasset;
        // assets[_id].id = _id;
        // assets[_id].class = _class;
        // assets[_id].name = _name;
        // assets[_id].currency = _currency;
        // assets[_id].ownership_type = _owntype;
        // assets[_id].investment_type = _investype;
        // assets[_id].assetAddr = addr;
        return addr;
    }

    function createPerBasedAsset(uint256 _id, string _class, string _name, string _currency, string _owntype, string _investype, string _symbol) external returns(address) {
        PerBasedAsset perAsset = new PerBasedAsset();
        addr = address(perAsset);
        Asset newasset = new Asset(_id, _class, _name, _currency, _owntype, _investype, addr);
        assets[_id] = newasset;
        // assets[_id].id = _id;
        // assets[_id].class = _class;
        // assets[_id].name = _name;
        // assets[_id].currency = _currency;
        // assets[_id].ownership_type = _owntype;
        // assets[_id].investment_type = _investype;
        // assets[_id].assetAddr = addr;
        return addr;
    }

    // function getAsset(uint256 calldata _id) external view returns(HoldingCompany){
    //     return assets[_id];
    // }

    function getAssetAddr(uint256 calldata _id) external view returns(address){
        return assets[_id].assetAddr;
    }

}