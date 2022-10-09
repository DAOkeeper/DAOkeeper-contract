// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@klaytn/contracts/governance/Governor.sol";
import "@klaytn/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@klaytn/contracts/governance/extensions/GovernorVotes.sol";
import "@klaytn/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";

contract DAOkeeperGovernor is Governor, GovernorCountingSimple, GovernorVotes, GovernorVotesQuorumFraction {
    constructor(IVotes _token)
        Governor("DAOkeeperGovernor")
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(10)
    {}

    function votingDelay() public pure override returns (uint256) {
        return 1; // 1 block
    }

    function votingPeriod() public pure override returns (uint256) {
        return 604800; // 1 week (Klaytn blocktime = ~1sec)
    }

    // The following functions are overrides required by Solidity.

    function quorum(uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotesQuorumFraction)
        returns (uint256)
    {
        return super.quorum(blockNumber);
    }
}
