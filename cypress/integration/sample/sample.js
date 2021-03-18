import {Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^I'm at Google$/, function () {
    cy.visit('/');
});
When(/^I type search word 'github'$/, function () {
    cy.get('input[type=text]').type('BrowserStack');
});
When(/^Press 'Search'$/, function () {
    cy.get('input[value="Google Search"]').first().click();
});
Then(/^I have some results$/, function () {
    cy.title().should('eq','BrowserStack - Google Search')
});
