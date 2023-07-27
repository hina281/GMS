/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
var name=faker.person.firstName()
var email=faker.internet.email()
var country=faker.location.country()
var zcode=faker.location.zipCode('#####') 
var number=faker.phone.number()
var address= faker.location.streetAddress()
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email:string, password) => {
    cy
    .visit('/')
    cy
    .viewport(1970,1020)
    cy
    .get('#basic_username')
    .type(email)
    cy
    .get('#basic_password')
    .type(password)
    cy
    .contains('span','Sign in')
    .click()

  })
Cypress.Commands.add('userSignUp',(username:string,password,password1)=>{
  cy
  .get('#user_username').type(name)
  cy
  .get('#user_password').type(password)
  cy
  .get('#user_confirmPassword').type(password1)
})
Cypress.Commands.add('userContactDetails', ()=>{
  cy
  .get('#user_firstName').type(name)
  cy
  .get('#user_lastName').type(name)
  cy
  .get('#user_initials').type('Ms/Mr')
  cy
  .get('#user_email').type(email)
  cy
  .get('#user_phone').type(number)
  cy.wrap
  cy
  .get('#user_address').type(address)
  cy
  .get('#user_residenceCountryId').click().type("United Arab Emirates{enter}")
  cy
  .wait(500)
  cy
  .get('#user_cityId').click().type('Ras al-Khaimah{enter}')
  cy
  .wait(500)
  cy
  .get('#user_originCountryId').click().type('United Arab Emirates{enter}')
  cy
  .get('#user_idNumber').type(number)
  cy
  .get('.ant-upload #user_profilePic').selectFile('logo.jpeg',{force:true})
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
