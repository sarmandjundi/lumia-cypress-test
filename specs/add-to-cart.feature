Feature: Add to cart
  As a user I want to be able to add products
  to the cart, so that I can buy them.

  Background:
    Given that I am on the start page

  Scenario Outline: Adding "<quantity>" "<product>" to the cart
    Given that I have searched for "<product>"
    When I click the buy button "<quantity>" time
    Then "<quantity>" "<product>" should be added to the cart

    Examples:
      | product    | quantity |
      | Bordslampa | 1        |
      | Bordslampa | 2        |
      | Golvlampa  | 1        |
      | Golvlampa  | 3        |