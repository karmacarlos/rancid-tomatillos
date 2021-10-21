
//General fetch function
export const fetchData = (endPoint) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endPoint}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    return response.json();
  })
}

