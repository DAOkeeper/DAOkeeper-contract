// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./KIP7/KIP7Trackable.sol";


// DAO governance token deployment & mint token to the token contract itself
contract DAOkeeperToken is KIP7Trackable {
    
    constructor(
        string memory _name,
        string memory _symbol,
        string memory _DAOName,
        string memory _intro,
        string memory _image,
        string memory _link,
        uint256 _initial_supply
    )  KIP7Trackable (
            _name,
            _symbol,
            _DAOName,
            _intro,
            _image,
            _link,
            _initial_supply
    ) {
        _mint(address(this), _initial_supply * 10 ** uint(decimals()));
    }
}