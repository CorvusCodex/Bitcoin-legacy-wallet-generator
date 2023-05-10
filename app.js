"use strict";

process.title = "Bitcoin legacy Wallet Generator";

// Importing required modules
const CoinKey = require('coinkey');
const crypto = require('crypto');

 // Generating a random private key in hexadecimal format
 let privateKeyHex = crypto.randomBytes(32).toString('hex');
 console.log("Private key: " + privateKeyHex);

 // Creating a CoinKey object using the private key
 let ck = new CoinKey(Buffer.from(privateKeyHex, 'hex'));

 // Setting the compressed property of the CoinKey object to false
 ck.compressed = false;

 //Printing public address
 console.log("Public address: " + ck.publicAddress);
