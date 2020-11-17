/// <reference types="Cypress"/>

class CheckoutCompletePage{
    
    //PageObjects
    get thankyouText() { return '.complete-header'}

    //PageActions
    //This function is to verify thank you page
    verifyThankyou(){
        cy.get(this.thankyouText).should('have.text','THANK YOU FOR YOUR ORDER')
    }
}
export default CheckoutCompletePage