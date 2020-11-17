class Base{

    doClick(element){
        element.waitForDisplayed()
        element.click()
    }

    doSetValue(element,text){
        element.waitForDisplayed()
        element.setValue(text)
    }

    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doGetText(element){
        element.waitForDisplayed()
        return element.getText()
    }


}
module.exports = new Base()