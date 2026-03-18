/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import register_page from "../pages/register_page";

Given('I am on signup screen', () => {
  home_page.accessRegister()
})

Given('I fill name', () => {
  register_page.fillName('Raí Uberson')
})

Given('I fill password', () => {
  register_page.fillPassword('123456')
})

Given('I fill password {string}', (password) => {
  register_page.fillPassword(password)
})

Given('I fill e-mail {string}', (email) => {
  register_page.fillEmail(email)
})

Given('I fill my credentials on register', () => {
  register_page.fillName('RD Tarlene')
  register_page.fillEmail('rapena@gmail.com')
  register_page.fillPassword('123456')
})

When('I click on Register button', () => {
  register_page.onClickButtonRegister()
})

Then('I see message {string} on register', (message) => {
  register_page.checkErrorMessage(message)
})

Then('I see success message on register', () => {
  register_page.checkSuccessMessage('RD Tarlene')
})
  
