/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import login_page from "../pages/login_page";

Given('I am on login screen', () => {
    home_page.accessLogin()
})

Given('I fill e-mail', () => {
    login_page.fillEmail('rdsdantas@gmail.com')
})

Given('I fill my credentials', () => {
    login_page.fillEmail('rdp@gmail.com')
    login_page.fillPassword('123456')
})

When('I click the Login button', () => {
    login_page.onClickBtnLogin()
})

Then(`I see the message {string}`, (message) => {
    login_page.toCheckErrorMessage(message)
})

Then(`I see success message`, () => {
    login_page.checkSuccessMessage('rdp@gmail.com')
})
