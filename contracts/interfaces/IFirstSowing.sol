// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155Upgradeable.sol';

interface IFirstSowing is IERC1155Upgradeable {
	function mint(address to, uint256 id, uint256 amount, bytes memory data) external;
}
