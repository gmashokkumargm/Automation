/// <reference types="Cypress" />

class HomePage{

    //Verify the homepage url
    verifyURL(value){
        cy.url().should('include',value)
    }
    
    //Click add to cart button for the selected product
    clickAddToCart(productName){
        cy.get('.inventory_item_name').each((ele,index,list)=>{
            if(ele.text().includes(productName)){
                cy.get('.btn_primary.btn_inventory').eq(index).click()
            }
        })
    }

}
export default HomePage