import CryptoJS from "crypto-js";

const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

let ts = new Date().getTime();
let hash = CryptoJS.MD5(ts + privateKey + publicKey);
let marvelKey = `ts=${ts}&apikey=${publicKey}&hash${hash}`;

module.exports = { marvelKey };