import marvelApi from '../api/marvelApi';
import CHARCTERS_BASE_URL from '../helper';
import axios from 'axios';

const getAllCharacters = () => {
    let url = `${CHARCTERS_BASE_URL}?orderBy=-modified&limit=20&apikey=${marvelApi}`;
    return (dispatch) => {
        axios.get(url).then((response) => {
            dispatch({
                type: 'ALL_CHARACTERS',
                payload: response.data.data.results
            });
        })
            .catch((error) => {
                console.error(error);
            });
    }
}


export {
    getAllCharacters,
};