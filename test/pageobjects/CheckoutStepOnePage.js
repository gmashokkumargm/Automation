const base = require("../Base/Base")

class CheckoutStepOnepage{

    get firstNameField(){ return $('#first-name')}
    get lastNameField() {return $('#last-name')}
    get zipField() { return $('#postal-code')}
    get continueButton() {return $('//input[@value="CONTINUE"]')}

    enterInformation(firstName, lastName, zip){
        base.doSetValue(this.firstNameField,firstName)
        base.doSetValue(this.lastNameField,lastName)
        base.doSetValue(this.zipField,zip)
        console.log(`The information firstName: ${firstName}, lastname: ${lastName}, zip ${zip} entered sucesfully`)
    }

    clickContinueButton(){
        base.doClick(this.continueButton)
        console.log('Continue button clicked sucessfully')
    }
}
module.exports = new CheckoutStepOnepage()