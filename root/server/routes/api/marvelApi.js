
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

const timestamp = new Date().getTime();

const md5 = require("crypto-js/md5");

const hashMarvelApi = md5(timestamp + privateKey + publicKey).toString();

const marvelApi = `ts=${timestamp}&apiKey=${publicKey}&hash=${hashMarvelApi}`;

export default marvelApi;





// import axios from 'axios';

// const marvelApi = axios.create({
//     baseURL: 'https://gateway.marvel.com/v1/public',
// });

// export default marvelApi;