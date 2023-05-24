// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155ReceiverUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/MerkleProofUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';

import './interfaces/IFirstSowing.sol';

contract FirstSowingDistributor is IERC1155ReceiverUpgradeable, Initializable {
	IFirstSowing public token;
	bytes32 public merkleRoot;

	mapping(uint256 => uint256) private claimedBitMap;

	event TokenUpdated(IFirstSowing token);

	event MerkleRootUpdated(bytes32 merkleRoot);

	event Claimed(uint256 index, address account, uint256 id, uint256 amount);

	event Received(address operator, address from, uint256 id, uint256 value, bytes data);

	event BatchReceived(address operator, address from, uint256[] ids, uint256[] values, bytes data);

	function initialize(IFirstSowing _token, bytes32 _merkleRoot) external initializer {
		_setToken(_token);
		_setMerkleRoot(_merkleRoot);
	}

	function claim(
		uint256 index,
		address account,
		uint256 id,
		uint256 amount,
		bytes32[] calldata merkleProof
	) external {
		require(!isClaimed(index), 'FirstSowingDistributor: token has been claimed.');
		bytes32 node = keccak256(abi.encodePacked(index, account, id, amount));
		require(
			MerkleProofUpgradeable.verify(merkleProof, merkleRoot, node),
			'FirstSowingDistributor: Invalid merkle proof.'
		);
		_setClaimed(index);
		token.safeTransferFrom(address(this), account, id, amount, '');
		emit Claimed(index, account, id, amount);
	}

	function isClaimed(uint256 index) public view returns (bool) {
		uint256 claimedWordIndex = index / 256;
		uint256 claimedBitIndex = index % 256;
		uint256 claimedWord = claimedBitMap[claimedWordIndex];
		uint256 mask = (1 << claimedBitIndex);
		return claimedWord & mask == mask;
	}

	function _setClaimed(uint256 index) internal {
		uint256 claimedWordIndex = index / 256;
		uint256 claimedBitIndex = index % 256;
		claimedBitMap[claimedWordIndex] = claimedBitMap[claimedWordIndex] | (1 << claimedBitIndex);
	}

	function _setToken(IFirstSowing _token) internal {
		token = _token;
		emit TokenUpdated(_token);
	}

	function _setMerkleRoot(bytes32 _merkleRoot) internal {
		merkleRoot = _merkleRoot;
		emit MerkleRootUpdated(_merkleRoot);
	}

	function onERC1155Received(
		address operator,
		address from,
		uint256 id,
		uint256 value,
		bytes calldata data
	) external override returns (bytes4) {
		emit Received(operator, from, id, value, data);
		return IERC1155ReceiverUpgradeable.onERC1155Received.selector;
	}

	function onERC1155BatchReceived(
		address operator,
		address from,
		uint256[] calldata ids,
		uint256[] calldata values,
		bytes calldata data
	) external override returns (bytes4) {
		emit BatchReceived(operator, from, ids, values, data);
		return IERC1155ReceiverUpgradeable.onERC1155BatchReceived.selector;
	}

	function supportsInterface(bytes4 interfaceId) external pure override returns (bool) {
		return
			interfaceId == IERC1155ReceiverUpgradeable.onERC1155Received.selector ||
			interfaceId == IERC1155ReceiverUpgradeable.onERC1155BatchReceived.selector;
	}
}
