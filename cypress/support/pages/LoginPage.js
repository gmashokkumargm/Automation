/// <reference types="Cypress"/>


class LoginPage {

    //Enter email, password and login button
    login(email, password){
        cy.enterText('#user-name',email)
        cy.enterText('#password',password)
        cy.clickElement('#login-button')
    }

    //Just click login button alone
    clickLoginButton(){
        cy.clickElement('#login-button')
    }

    //Verify error message if we click login button with empty value
    verifyEmptyLogin(){
        cy.containsAssert('Epic sadface','include.text','Username is required')
    }

    //Verify error message if we use invalid credentials
    verifyErrorMessage(){
        cy.containsAssert('Username and password','include.text','Username and password do not match')
    }
    
}
export default LoginPage;