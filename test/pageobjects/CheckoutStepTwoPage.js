const { assert } = require("chai")
const Base = require("../Base/Base")

class CheckoutStepTwoPage{

    get priceValue() {return $$('//div[@class="inventory_item_price"]')}
    get itemTotal() { return $('//div[@class="summary_subtotal_label"]')}
    get taxValue() { return $('//div[@class="summary_tax_label"]')}
    get grandTotalValue() {return $('//div[@class="summary_total_label"]')}
    get finishButton() { return $('//a[@class="btn_action cart_button"]')}


    getProductsPriceValue(){
        var sum=0
        for(var i=0;i<this.priceValue.length;i++){
            var text = this.priceValue[i].getText().split('$')
            text=text[1].trim()
            sum = sum+Number(text)
        }
        console.log(`The sum of all product value is: ${sum}`)
        return sum
    }

    getItemTotalValue(){
        var itemTotal = this.itemTotal.getText().split('$')
        itemTotal = Number(itemTotal[1].trim())
        console.log(`The item total value is: ${itemTotal}`)
        return itemTotal
    }

    verifyProductsValueAndItemTotal(){
        if(this.getProductsPriceValue()===this.getItemTotalValue()){
            console.log(`The both products sum and item total are same: ${this.getProductsPriceValue()} = ${this.getItemTotalValue()}`)
        }
        else{
            console.log(`The both products sum and item total are mismatched: ${this.getProductsPriceValue()} = ${this.getItemTotalValue()}`)
        }
    }

    getTaxValue(){
        var tax = this.taxValue.getText().split('$')
        tax = Number(tax[1].trim())
        console.log(`Tax value is: ${tax}`)
        return tax
    }

    getGrandTotalValue(){
        var grandTotal = this.grandTotalValue.getText().split('$')
        grandTotal = Number(grandTotal[1].trim())
        console.log(`Grand total value is: ${grandTotal}`)
        return grandTotal
    }

    verifyGrandTotal(){
        var allProductTotal = (Number(this.getItemTotalValue())+Number(this.getTaxValue())).toFixed(2)
        if(allProductTotal==Number(this.getGrandTotalValue())){
            console.log(`Item total + tax value is equal to grand total ${allProductTotal} = ${this.getGrandTotalValue()}`)
        }
        else{
            console.log(`Item total + tax value is not equal to grand total ${allProductTotal} = ${Number(this.getGrandTotalValue())}`)
            assert.fail()
        }
    }

    clickFinishButton(){
        Base.doClick(this.finishButton)
    }
}
module.exports = new CheckoutStepTwoPage()