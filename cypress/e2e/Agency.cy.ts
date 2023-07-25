import { faker } from '@faker-js/faker'
var name=faker.person.fullName()
var email=faker.internet.email()
var country=faker.location.country()
var zcode=faker.location.zipCode('#####') 
var number=faker.phone.number()
var address= faker.location.streetAddress()
describe('Agency test Cases',()=>{
        beforeEach(()=>{
            cy.fixture('logindetails.json').then((user)=>{
                cy.login(user.username,user.Password)
            })
        })

    it('Add Agency',()=>{
        cy
        .contains('button','Add')
        .click()
        cy
        .wait(1000)
        cy
        .get('#agency_name')
        .type(name)
        cy
        .get('#agency_email')
        .type(email)
        cy
        .get('#agency_origin')
        .type(country)
        cy
        .get('#agency_zip')
        .type(zcode)
        cy
        .get('#agency_fax')
        .type(zcode)
        cy
        .get('#agency_phone')
        .type(number)
        cy
        .get('#agency_streetName')
        .type(address)
        cy
        .get('#agency_streetNumber')
        .type(address)
        cy
        .get('#agency_countryId')
        .click()
        cy
        .wait(1000)
        cy
        .get('.ant-select-item-option:nth-child(2)')
        .click()
        cy
        .get('#agency_cityId')
        .click()
        cy
        .wait(1000)
        cy
        .get('.ant-select-item-option:nth-child(2)')
        .click()
    })
    
})