
beforeEach(() => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie' })
    .as('movies')
  cy.intercept('GET', 'https://express-rancid-tomatillos.herokuapp.com/watchlist', { "watchList": [694919, 337401] })
    .as('watchlist')
  cy.visit('http://localhost:3000')
})

describe('Home page flows', () => {
  it('Should be able to visit http://localhost:3000', () => {
    cy.url().should('include', '/')
      .get('.movies-container')
      .children()
      .should('have.length', 2)
      .get('.movies-container')
      .get('.poster')
      .find('p')
      .contains('Money Plane')
  });

  it('Should redirect user to movie details when movie poster is clicked', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919' , { fixture: 'singleMovie'})
    cy.contains('Money Plane')
      .click()
      .url()
      .should('include', 'http://localhost:3000/movie/694919') 
  })

  it('Should render movie trailer', () => {
    cy.contains('Money Plane')
      .click()
      .get('main')
      .find('iframe')
  })

  it('Should render movie details', () => {
    cy.contains('Money Plane')
      .click()
      .get('h2')
      .contains('Money Plane')
  })

  it('Should return to home page when user clicks the back arrow', () => {
    cy.contains('Money Plane')
      .click()
      .get('a')
      .click()
      .url()
      .should('include', 'http://localhost:3000/')
  })

  it('Should display all the movies stored on the watchlist', () => {
    cy.intercept('GET', 'https://express-rancid-tomatillos.herokuapp.com/watchlist', { "watchList": [694919, 337401] })
    cy.visit('http://localhost:3000/watchlist')
    cy.get('.movies-container')
      .children()
      .should('have.length', 2)
  })
});
