/// <reference types="Cypress"/>

class CommonPage{

    //Click on more menu located in top left
    clickMoreMenu(){
        cy.clickElement('.bm-burger-button')
    }

    //Click logout from the options of more menu
    clickLogout(){
        cy.clickElement('#logout_sidebar_link')
       // cy.get('#').click()
    }
    
    //Click cart icon located in top right
    clickCartIcon(){
        cy.clickElement('svg[data-icon="shopping-cart"]')
    }


}
export default CommonPage