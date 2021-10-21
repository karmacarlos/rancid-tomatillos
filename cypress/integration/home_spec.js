//potential test cases
//home page shows error if unable to complete get request
//on button click takes user to movie details
//if there is an error getting movie details, it shows the error
//sad path put on a different

beforeEach(() => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie' })
    .as('movies')
  cy.visit('http://localhost:3000')
})

//test what is being rendered
//if its a class div.class or if its a id do div#id
//Cy.get(‘img[src=“imagesrc.com”]’) <<get attribute
describe('Home page flows', () => {
  it('Should be able to visit http://localhost:3000', () => {
    //testing routes... look into cypress dox
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
  })

  it('Should redirect user to movie details when movie poster is clicked', () => {
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
      .get('main')
      .get('div')
      .children('.movie-info')
      .get('h2')
      .contains('Money Plane')
  })

  it.only('Should return to home page when user clicks the back arrow', () => {
    cy.contains('Money Plane')
      .click()
      .get('main')
      .get('div')
      .get('.arrow')
      .get('img')
      .click()
      .url()
      .should('include', 'http://localhost:3000/')
  })


});

// describe('Home sad path', () => {
//   it('Should show an error if there are no posters', () => {

//     .visit('http://localhost:3000/')
//     .get('#error').contains('Something went wrong, please try again later')
//   })
//})