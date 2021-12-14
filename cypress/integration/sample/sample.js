import {Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(`I am on the Bstackdemo website and click on signin`, function () {
    cy.visit('https://bstackdemo.com/');
    cy.get('#signin').click();
});
When(`I enter {string} and {string}`, (username,password) => {
    cy.get('#username input').type('demouser',{force: true});
    cy.get('#username input').type('{enter}');
    cy.get('#password input').type('testingisfun99', {force: true});
    cy.get('#password input').type('{enter}');
    cy.get('#login-btn').click();
});
Then(`I should see user as {string}`, (user) => {
    cy.get('.username').should('have.text', 'demouser')
});
