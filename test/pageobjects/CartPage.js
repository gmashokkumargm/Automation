const { assert } = require('chai')
const base = require('../Base/Base')

class CartPage{

    get productList() {return $$('(//div[@class="inventory_item_name"])')}
    get checkoutButton() {return $('//a[@class="btn_action checkout_button"]')}


    verifyAddedProduct(productName){
        for(var i=0; i<this.productList.length; i++){
            if((this.productList[i].getText())===productName){
                console.log('Added product is available in cart: '+productName)
            }
        }
    }

    verifyNumberOfProductsAdded(number){
        if(this.productList.length===number){
            console.log('Cart contains '+number+' number of products')
        }
        else{
            console.log('Cart is empty '+number)
            assert.fail()
        }
    }

    clickCheckoutButton(){
        base.doClick(this.checkoutButton)
    }
}
module.exports = new CartPage()