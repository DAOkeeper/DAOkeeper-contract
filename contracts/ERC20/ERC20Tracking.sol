// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "hardhat/console.sol";

import {CommonStructs} from "../common/CommonStructs.sol";
import "./ERC20Votes.sol";

contract ERC20Tracking is ERC20, ERC20Permit, ERC20Votes {

    // round index marker for the last executed Airdrop batch round.
    uint16 private roundNumber = 1;

    string private _DAOName; // DAO name
    string private _intro; // DAO short introduction
    string private _image; // DAO profile image url link
    string private _link; // DAO webpage url link
    address private _owner; // Contract owner

    constructor(
        string memory _name,
        string memory _symbol,
        string memory DAOName,
        string memory intro,
        string memory image,
        string memory link,
        uint256 _initial_supply
    ) ERC20 (_name, _symbol) ERC20Permit(_name) {
        _DAOName = DAOName;
        _intro = intro;
        _image = image;
        _link = link;
        _owner = msg.sender;
    }

    // Override
    function _mint(address _to, uint256 _amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(_to, _amount);
    }

    // Override
    function _burn(address _account, uint256 _amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(_account, _amount);
    }

    // Override
    function _afterTokenTransfer(address _from, address _to, uint256 _amount)  
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(_from, _to, _amount);
    }
}