// SPDX-License-Identifier: MIT
pragma solidity  >=0.6.0 <0.9.0;

contract Votacion {
    address public owner;
    mapping(string => uint) public proposals;
    mapping(address => bool) public whitelist;
    mapping(address => bool) public hasVoted;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Solo del propitario");
        _;
    }

    modifier canVote() {
        require(whitelist[msg.sender] && !hasVoted[msg.sender], "No tienes permiso para votar");
        _;
    }

    function addProposal(string memory _name) public onlyOwner {
        proposals[_name] = 0;
    }

    function addToWhitelist(address _address) public onlyOwner {
        whitelist[_address] = true;
    }

    function vote(string memory _proposal) public canVote {
        proposals[_proposal] += 1;
        hasVoted[msg.sender] = true;
    }
}