/// <reference types="Cypress"/>

class CartPage{

    //PageObjects
    get eachProductNames() { return '.inventory_item_name'}
    get numberOfCartItems() { return '.cart_item'}
    get checkoutButton() {return '.btn_action.checkout_button'}

    //PageActions
    //This function is for verify whether product is added in the cart
    verifyProduct(productName){
        cy.get(this.eachProductNames).each((ele,index,list)=>{
            if(ele.text().includes(productName)){
                cy.log('product added in the card "'+productName+'"')
            }
        })
    }
    
    //This function is to verify how many products are added
    verifyNumberOfProducts(noOfProduct){
        cy.get(this.numberOfCartItems).should('have.length',noOfProduct)
    }

    //This function is to click checkout button
    clickCheckOutButton(){
        cy.clickElement(this.checkoutButton)
    }

}
export default CartPage