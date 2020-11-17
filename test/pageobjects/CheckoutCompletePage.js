const { assert } = require("chai")

class CheckoutCompletePage{

    get thankyouText() {return $('//h2[@class="complete-header"]')}

    verifyThankyou(text){
        if(text==='THANK YOU FOR YOUR ORDER'){
            console.log(`The text contains the value ${text}`)
        }
        else{
            console.log(`The text doesn't contains the value ${text}`)
            assert.fail()
        }
    }

}
module.exports = new CheckoutCompletePage()