pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract LearningToken is ERC20Capped {
  constructor(uint256 cap) ERC20("LearningToken", "LTT") ERC20Capped(cap) {}

  function issueToken() public {
    _mint(msg.sender, 1000 * 10**18);
  }
}
