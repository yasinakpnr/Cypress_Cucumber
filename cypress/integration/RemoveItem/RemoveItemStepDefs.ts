import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


 function navigateToModule(tab:string , module: string) {

    const tabLocator = "//span[.='" + tab + "']";
    const moduleLocator = "[title='" + module + "']";

    cy.get(".nav.nav-pills>li>a>span").contains(tab).should("have.text", tab).trigger("mouseover");

    cy.get(moduleLocator, {timeout:3000}).click({ force: true });
}


function locateProduct(idNumber:string){
    const locators = "[data-article-number='" + idNumber + "']"
    return cy.get(locators);
}

function navigateProductPage(idNumber : string){
    locateProduct(idNumber).click();
}



When("the user navigates to the page", (dataTable) => {
    dataTable.hashes().forEach((element: { tab: string; module: string; }) => {
        navigateToModule(element.tab,element.module);
    });
    
})

And('the user add a product {string} to the cart' , (idNumber) => {
     navigateProductPage(idNumber);
     cy.get('.addToCartButton-init').click();
     

})

And('the user clicks chart icon at the top of the right corner', ()=> {
    cy.get('.mini-cart-icon > .svg-map-icon').click();
})

When('the user click remove item icon' , () => {
    cy.get('#removeEntry_0 > .svg-map-icon').click();
})

Then('verify that item has been removed and the system displayed {string}' , (message) => {

    cy.get('.alert.alert-info').contains(message).should('be.visible');
})

When('the user change quantity of product with {string}' , (quantity) => {
    cy.get('#quantity_0').select(quantity).should('have.value', quantity);
})

Then('verify that the user can see the added product {string} in the cart' , (idNumber) => {

    cy.get('.article-number').contains(idNumber).should('be.visible');
})