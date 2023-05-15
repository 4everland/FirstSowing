// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155BurnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155SupplyUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import './interfaces/IFirstSowing.sol';

/// @dev FirstSowing
/// @author Alexandas
contract FirstSowing is IFirstSowing, ERC1155BurnableUpgradeable, ERC1155SupplyUpgradeable, OwnableUpgradeable {
	mapping(uint256 => string) public tokenURIs;

	event TokenURIUpdated(uint256 id, string tokenURI);

	function initialize(string memory _uri, address newOwner) external initializer {
		__ERC1155_init(_uri);
		_transferOwnership(newOwner);
	}

	function mint(address to, uint256 id, uint256 amount, bytes memory data) external override onlyOwner {
		_mint(to, id, amount, data);
	}

	function uri(uint256 id) public view override returns (string memory) {
		return tokenURIs[id];
	}

	function setTokenURI(uint256 id, string memory _uri) external onlyOwner {
		_setTokenURI(id, _uri);
	}

	function _setTokenURI(uint256 id, string memory _uri) internal {
		tokenURIs[id] = _uri;
		emit TokenURIUpdated(id, _uri);
	}

	function _beforeTokenTransfer(
		address operator,
		address from,
		address to,
		uint256[] memory ids,
		uint256[] memory amounts,
		bytes memory data
	) internal override(ERC1155SupplyUpgradeable, ERC1155Upgradeable) {
		ERC1155SupplyUpgradeable._beforeTokenTransfer(operator, from, to, ids, amounts, data);
	}

}
