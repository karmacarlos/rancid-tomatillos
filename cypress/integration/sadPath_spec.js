describe('Homepage sad paths', () => {
  it('Should return error message if unable to get data from API', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { })
      .visit('http://localhost:3000')
      .get('#error')
      .should('contain', 'Something went wrong, please try again later')
  })
});

describe('Movie details sad path', () => {
  it('Should return error message if unable to get movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie'})
      .as('movies')
      .visit('http://localhost:3000')
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { statusCode: 404 })
      .get('#694919')
      .click()
      .url()
      .should('include', 'http://localhost:3000/error')
  });
});

describe('Watchlist sad path', () => {
  it('Should display a message indicating that the watchlist is empty if it does not contain movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie'})
    .as('movies')
    .visit('http://localhost:3000')
    .get('.watch-list')
    .click()
    .url()
    .should('include', 'http://localhost:3000/watchlist')
    cy.get('#error')
    .should('contain', 'There is no movie on the watch list, try adding some')
  })
})