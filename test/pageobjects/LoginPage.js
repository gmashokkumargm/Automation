const base = require("../Base/base")

class LoginPage {

    //PageObjects
    get eleUsername() {return $('#user-name')}
    get elePassword() {return $('#password')}
    get btnLogin() {return $('#login-button')}
    get eleErrorMessage() {return $('[data-test=error]')}

    //PageActions
    login(username,password){
        base.doSetValue(this.eleUsername,username)
        base.doSetValue(this.elePassword,password)
        base.doClick(this.btnLogin)
    }

    clickLoginButton(){
        base.doClick(this.btnLogin)
    }

    verifyErrorMessage(value){
        expect(base.doGetText(this.eleErrorMessage)),(value)
        console.log(base.doGetText)
    }

}
module.exports = new LoginPage()