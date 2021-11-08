
//General fetch function
const fetchData = (endPoint) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endPoint}`)
  .then(response => checkResponse(response))
}

const fetchDataExpress = (endPoint) => {
  return fetch(`https://express-rancid-tomatillos.herokuapp.com/${endPoint}`)
  .then(response => response.json());
}

const postDataExpress = (movieId) => {
  return fetch('https://express-rancid-tomatillos.herokuapp.com/watchlist', {
    method: 'POST',
    body: JSON.stringify({
      movieId,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => checkResponse(response))
  .catch((error) => console.warn(error));
}

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error(`Status: ${response.status}`);
  }
  return response.json();
}

export { fetchDataExpress, fetchData, postDataExpress }