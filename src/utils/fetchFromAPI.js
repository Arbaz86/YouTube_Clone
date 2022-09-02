import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "364a1d94b4msh8a3d104e4c9f0e2p171fc6jsn4e19ee700312",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchFromAPI = (url) => {
  return axios.get(`${BASE_URL}/${url}`, options).then(({ data }) => {
    return data;
  });
};

export default fetchFromAPI;
