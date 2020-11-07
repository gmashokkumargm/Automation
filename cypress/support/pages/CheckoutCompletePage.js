/// <reference types="Cypress"/>

class CheckoutCompletePage{

    //This function is to verify thank you page
    verifyThankyou(){
        cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
    }
}
export default CheckoutCompletePage