//potential test cases
//home page shows error if unable to complete get request
//on button click takes user to movie details
//if there is an error getting movie details, it shows the error

describe('Home page flows', () => {
  it('Should be able to visit http://localhost:3000', () => {
    cy.visit('http://localhost:3000/')
      .contains('Rancid Tomatillos')
  });

  it('Should be able to show movie posters', () => {
    cy.request('movies/337401')
  });
  
});