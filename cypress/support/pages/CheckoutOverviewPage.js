/// <reference types="Cypress"/>


class CheckoutOverviewPage{

    //Get added products value and compare with subTotal value
    verifySubTotal(){
        var subTotal=0
        cy.get('.inventory_item_price').each((ele,index,list)=>{
            var text = ele.text().split('$')
            text = text[1].trim()
            subTotal = Number(text) + Number(subTotal)
            cy.log(subTotal)
        })    
        cy.get('.summary_subtotal_label').then(function(anyText){
            var itemTotal = anyText.text().split('$')
            itemTotal= itemTotal[1].trim()
            expect(subTotal).to.eq(Number(itemTotal))
        })
    }

    //Add subTotal & tax amount and verify with GrandTotal
    verifyTotal(){
        var itemTotal=0
        cy.get('.summary_subtotal_label').then(function(anyText){
            itemTotal = anyText.text().split('$')
            itemTotal= itemTotal[1].trim()
            cy.get('.summary_tax_label').then(function(text){
                var tax = text.text().split('$')
                tax=tax[1].trim()
                itemTotal = Number(itemTotal)+Number(tax)
                itemTotal = itemTotal.toFixed(2)
                cy.get('.summary_total_label').should('include.text',itemTotal)
            })
        })
    }

    //click on finish button
    clickFinishButton(){
        cy.clickElement('.btn_action.cart_button')
    }

}
export default CheckoutOverviewPage