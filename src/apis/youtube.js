import axios from 'axios';


const KEY='AIzaSyB4RifRgQy7UaQ8cfDGIY1Jz_vTr_uca_I';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});


