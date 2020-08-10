const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6f11ee3b10196d5821ecf4925e76205f&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima,
}