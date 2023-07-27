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
        .contains('div','Ras al-Khaimah')
        .as('city')
        cy
        .get('@city')
        .click()
        cy
        .get('#agency_timezoneId')
        .click()
        cy
        .wait(1000)
        cy
        .contains('div','(UTC-12:00) International Date Line West')
        .as('timezone')
        cy
        .get('@timezone')
        .click()
        cy
        .get('.ant-upload #agency_logo').selectFile('logo.jpeg',{force:true})
        cy
        .get('#agency_vatNumber')
        .type(number)
        cy
        .get('#agency_vatAmount')
        .type('5')
        cy
        .fixture('logindetails.json').then((user)=>{
            cy.userSignUp(user.name,user.Password,user.Password)
        })
        cy
        .get('#user_firstName')
        .type(name)
        cy
        .get('#user_lastName')
        .type(name)
        cy
        .get('#user_initials')
        .type('Ms/Mr')
        cy
        .get('#user_email')
        .type(email)
        cy
        .get('#user_phone')
        .type(number)
        cy.wrap
        cy
        .get('#user_address')
        .type(address)
        cy
        .get('#user_residenceCountryId')
        .click()
        .type("United Arab Emirates{enter}")
        cy
        .wait(500)
        cy
        .get('#user_cityId')
        .click()
        .type('Ras al-Khaimah{enter}')
        cy
        .wait(500)
        cy
        .get('#user_originCountryId')
        .click()
        .type('United Arab Emirates{enter}')
        cy
        .get('#user_idNumber')
        .type(number)
        cy
        .get('.ant-upload #user_profilePic').selectFile('logo.jpeg',{force:true})
        cy
        .contains('span','Save')
        .click()
    })
    
})