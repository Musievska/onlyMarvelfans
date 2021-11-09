const CryptoJS = require('crypto-js');

const privateKey = '15c8801c2819809a5fabc99ca907a3bc418686de';
const publicKey = '4d992782e5229d86d19196bce3756852';

let ts = new Date().getTime();
let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
let marvelKey = `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
console.log(marvelKey)

module.exports = { marvelKey };