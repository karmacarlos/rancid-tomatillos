export function fetchAllMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
   .then(response => response.json())
   .then(data => data);
}

