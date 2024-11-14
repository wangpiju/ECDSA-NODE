const { getRandomBytesSync } = require('ethereum-cryptography/random');
const { toHex } = require('ethereum-cryptography/utils');
const secp256k1 = require('secp256k1');

const privateKey = getRandomBytesSync(32);
console.log('private key: ' + toHex(privateKey));

const publicKey = secp256k1.publicKeyCreate(privateKey);
console.log('public key: ' + toHex(publicKey));