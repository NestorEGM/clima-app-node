const axios = require('axios');

const getLugarLatLng = async dir => {
  const encodedUrl = encodeURI(dir);

  const instace = axios.create({
    url: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      'x-rapidapi-key': '75c7226953mshea204b11a07a9cdp19775cjsn0c16487522bc',
    },
  });

  const resp = await instace.get();

  if (!resp.data.Result || resp.data.Result.length === 0) {
    throw new Error(`No hay resultados para ${dir}`)
  }

  const data = resp.data.Result[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng,
  }

  // axios.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', {
  //   params: {
  //     location: 'Madrid'
  //   },
  //   headers: {
  //     "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
  //     'x-rapidapi-key': '75c7226953mshea204b11a07a9cdp19775cjsn0c16487522bc',
  //   }
  // })
  //   .then(resp => {
  //     console.log(resp);
  //   })
  //   .catch(err => {
  //     console.log('ERROR!!!!!!!!!', err);
  //   });

  // axios({
  //   "method": "GET",
  //   "url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "75c7226953mshea204b11a07a9cdp19775cjsn0c16487522bc",
  //     "useQueryString": true
  //   }, "params": {
  //     "location": encodedUrl
  //   }
  // })
  //   .then((response) => {
  //     console.log(response.data.Result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

module.exports = {
  getLugarLatLng,
}