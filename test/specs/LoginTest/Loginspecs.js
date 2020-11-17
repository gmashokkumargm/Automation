const loginPage = require('../../pageobjects/LoginPage')
const homePage = require('../../pageobjects/HomePage')
const data = require('../../Data/data');

describe('Login test suite', function(){

    it('Login with valid credentials', function(){
        loginPage.login(data.validUserName, data.validPassword);
        console.log(homePage.getProductTitle())
    });


    it('Verify login with invalid login', function(){
        loginPage.clickLoginButton()
        loginPage.verifyErrorMessage(data.errorMessage.emptyLogin)
    })

    it('Verify invalid login', ()=>{
        loginPage.login(data.invalidUserName,data.invalidPassword)
        loginPage.verifyErrorMessage(data.errorMessage.invalidLogin)
    })

})