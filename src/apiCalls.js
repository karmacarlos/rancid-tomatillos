
//General fetch function
export const fetchData = (endPoint) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endPoint}`)
  .then(response => response.json())
}


// Component did mount, to paste on App 
// const componentDidMount = () => {
//   Promise.resolve(fetchData('movies'))
//   .then(data => this.setState( { movies: data.movies } ))
//   .catch(error => this.setState( { error: error.message } ))
// }
