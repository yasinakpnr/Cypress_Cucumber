import { And, Given } from "cypress-cucumber-preprocessor/steps";

Given("the user is on the home page", () => {
    cy.visit("https://www.haba-play.com/en_DE"); 
})

And("the user accepts the cookies", () => {
    cy.get('#onetrust-accept-btn-handler').click({ force: true });
    cy.get(".hffLightbox-close").click({ force: true });
    
})