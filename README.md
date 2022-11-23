# Whitelist-Dapp
Build a whitelist dApp NFT Collection

A whitelist is a mechanism that explicitly allows some identified addresses to access a particular privilege, service, mobility, or recognition.


Define the license and solidity compiler version.

- Define the contract Whitelist.

- Created a state variable (maxWhitelistedAddresses) to set the maximum number of addresses to be whitelisted.

- Created a constructor. The user will set the value in the state variable (maxWhitelistedAddresses) at the time of deployment.

- Created a state variable (numAddressesWhitelisted) to keep track of how many addresses have been whitelisted.

- Created a function (addAddressToWhitelist) to add the address of the sender to the whitelist and update the numAddressesWhitelisted variable. This function requires checking if the user has already been whitelisted and checking if we have reached the limit; if not, we throw an error.