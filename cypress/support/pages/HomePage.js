/// <reference types="Cypress" />

class HomePage{

    //PageObjects
    get itemName() { return '.inventory_item_name'}
    get btnAddToCart() { return '.btn_primary.btn_inventory'}

    //PageActions
    //Verify the homepage url
    verifyURL(value){
        cy.url().should('include',value)
    }
    
    //Click add to cart button for the selected product
    clickAddToCart(productName){
        cy.get(this.itemName).each((ele,index,list)=>{
            if(ele.text().includes(productName)){
                cy.log(index)
                cy.get(this.btnAddToCart).eq(index).click()
            }
        })
    }

}
export default HomePage