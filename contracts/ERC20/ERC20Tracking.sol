// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "hardhat/console.sol";

import {CommonStructs} from "../common/CommonStructs.sol";
import "./ERC20Votes.sol";

contract ERC20Trackable is ERC20, ERC20Permit, ERC20Votes {
    
}
