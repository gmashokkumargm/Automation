/// <reference types="Cypress"/>

class CartPage{

    //This function is for verify whether prodect is added in the cart
    verifyProduct(productName){
        cy.get('.inventory_item_name').each((ele,index,list)=>{
            if(ele.text().includes(productName)){
                cy.log('product added in the card "'+productName+'"')
            }
        })
    }
    
    //This function is to verify how many products are added
    verifyNumberOfProducts(noOfProduct){
        cy.get('.cart_item').should('have.length',noOfProduct)
    }

    //This function is to click checkout button
    clickCheckOutButton(){
        cy.clickElement('.btn_action.checkout_button')
    }

}
export default CartPage