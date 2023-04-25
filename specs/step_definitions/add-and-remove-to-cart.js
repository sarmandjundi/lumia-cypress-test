import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// this step definition is already in search.js
// so commented it out since duplicate step definitions
// are not allowed
/*Given('that I am on the start page', () => {
});*/

// define variables outside steps
// (and give them values inside a step)
// if you want to reuse them in another step
let searchedFor;



Given('that I have searched for the {string}', (searchTerm) => {
  searchedFor = searchTerm;

  cy.get('#search').type(searchTerm);
});

When('I click the buy button {string} time', (clickCount) => {
  for (let i = 1; i <= +clickCount; i++) {
    cy.log("searchedFor", searchedFor);
    // find h2 that contains the product we have searched for
    cy.get('.product h2').contains(searchedFor)
      // find its product div
      .parents('.product')
      // find the buy button inside the product div
      .find('button').contains('Köp')
      // and click the button
      .click();
  }
});

Then('{string} {string} should be added to the cart', (quantity, productName) => {
  // find a li (list item) in the cart that contains the product name
  //cy.log("hej alla ni glada", productName, quantity);
  cy.get('#cart li')
    .contains(productName)
    // and also contains the correct quantity
    .contains(quantity + 'st')
    // we should 1 element
    .should('have.length', 0);
});


When('I click the removeOne button {string} time', (clickCount) => {
  for (let i = 1; i <= +clickCount; i++) {
    cy.log("searchedFor", searchedFor);
    // find product in cart
    cy.get('#cart li').contains(searchedFor)
      // get the li tag for the row in the cart
      .parents('li')
      // find the removeOne button
      .find('.removeOne')
      // and click that button
      .click();
  }
});

Then('{string} {string} should be left in the cart', (quantity, productName) => {
  cy.log(productName, quantity)
  // find a li (list item) in the cart that contains the product name
  cy.get('#cart li')
    .contains(productName)
    .parents('li')
    // and also contains the correct quantity
    .contains(quantity + 'st')
    // check that it exists
    .should('exist')
});