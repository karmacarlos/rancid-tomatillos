
beforeEach(() => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie' })
    .as('movies')
  cy.visit('http://localhost:3000')
})

describe('Home page flows', () => {
  it('Should be able to visit http://localhost:3000', () => {
    cy.url().should('include', '/')
  });

  it('Should be able to show all movie posters', () => {
    cy.get('.movies-container')
      .children()
      .should('have.length', 2)
  });

  it('Movie should have title and rating', () => {
    cy.get('.movies-container')
      .get('.poster')
      .find('p')
      .contains('Money Plane')
  })

  it('Should redirect user to movie details when movie poster is clicked', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919' , { fixture: 'singleMovie'})
    cy.contains('Money Plane')
      .click()
      .url()
      .should('include', 'http://localhost:3000/Money%20Plane/694919') 
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
});
