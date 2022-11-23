// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Whitelist {

    // Max number of whitelisted addresses allowed
    uint8 public maxWhitelistedAddresses;
    // numAddressesWhitelisted would be used
    // to keep track of how many addresses have been whitelisted
    uint8 public numAddressesWhitelisted;

    // if an address is whitelisted, we would set it to true, 
    // it is false by default for all other addresses.
    mapping(address => bool) public whitelistedAddresses;

    // Setting the Max number of whitelisted addresses
    // User will put the value at the time of deployment
    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses =  _maxWhitelistedAddresses;
    }

    // This function adds the address of the sender to the whitelist
    function addAddressToWhitelist() public {
        // check if the user has already been whitelisted
        require(!whitelistedAddresses[msg.sender], 
                "Sender has already been whitelisted");
        // check if we have reach the limit, if not then throw an error.
        require(numAddressesWhitelisted < maxWhitelistedAddresses,
                 "More addresses can not be added, limit reached");

        // Add the address which called the function to the whitelistedAddress array
        whitelistedAddresses[msg.sender] = true;
        // Increase the number of whitelisted addresses
        numAddressesWhitelisted++;
    }
}