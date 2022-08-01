// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PunksNFT is ERC721, Ownable {
    uint256 public totalSuply;
 


    constructor () payable ERC721('Punks', 'P') {

    }


    function mint() public payable {
        uint newTokenId = totalSuply + 1;
totalSuply++;
_safeMint(msg.sender, newTokenId);

    }
}


