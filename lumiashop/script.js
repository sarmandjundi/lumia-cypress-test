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