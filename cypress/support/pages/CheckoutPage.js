/// <reference types="Cypress"/>

class CheckoutPage{

    //Enter informations on checkout page
    enterInformation(firstName,lastName,zip){
        cy.enterText('#first-name',firstName)
        cy.enterText('#last-name',lastName)
        cy.enterText('#postal-code',zip)
    }

    //Click on continue button
    clickContinueButton(){
        cy.clickElement('[type="submit"]')
    }

}
export default CheckoutPage