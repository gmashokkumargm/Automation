/// <reference types="Cypress"/>

class CheckoutPage{

    //PageObjects
    get firstNameField() { return '#first-name'}
    get lastNameField() { return '#last-name'}
    get postalCodeField() { return '#postal-code'}
    get continueButton() { return '[type="submit"]'}

    //PageActions
    //Enter informations on checkout page
    enterInformation(firstName,lastName,zip){
        cy.enterText(this.firstNameField,firstName)
        cy.enterText(this.lastNameField,lastName)
        cy.enterText(this.postalCodeField,zip)
    }

    //Click on continue button
    clickContinueButton(){
        cy.clickElement(this.continueButton)
    }

}
export default CheckoutPage