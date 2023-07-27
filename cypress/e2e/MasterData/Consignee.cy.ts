import { faker } from '@faker-js/faker'
var cname=faker.company.bsNoun()
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

    it('Add Consignee',()=>{
        cy
        .get('[href="#/3/dashboard"]')
        .click()
        cy
        .wait(3000)
        cy
        .get('ul > li:last-child').first().trigger('mouseover')
        cy
        .get('.ant-menu-submenu.ant-menu-submenu-vertical div')
        .contains('span','Master Data').should('be.visible')
        .trigger('mouseover')
        cy
        .get('[href="#/3/master-data/consignee"]')
        .click()
        cy
        .contains('span','Add')
        .click()
        cy
        .get('#company_name')
        .type(cname)
        cy
        .get('#company_email')
        .type(email)
        cy
        .get('#company_origin')
        .type(country)
        cy
        .get('#company_zip')
        .type(zcode)
        cy
        .get('#company_fax')
        .type(zcode)
        cy
        .get('#company_phone')
        .type(number)
        cy
        .get('#company_streetName')
        .type(address)
        cy
        .get('#company_streetNumber')
        .type(address)
        cy
        .get('#company_countryId')
        .click()
        cy
        .wait(1000)
        cy
        .get('.ant-select-item-option:nth-child(2)')
        .click()
        cy
        .get('#company_cityId')
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
        .get('#company_vatNumber')
        .type(zcode)
        cy
        .get('#company_registeredName')
        .type(cname)
        cy
        .get('.ant-upload #company_logo').selectFile('logo.jpeg',{force:true})
        // cy
        // .get('#') add consignee later here
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
        .type(zcode)
        cy
        .get('.ant-upload #user_profilePic').selectFile('logo.jpeg',{force:true})
        cy
        .get('.ant-row .ant-space-item [type="submit"]').as('addButton')
        cy
        .wait(1000)
        cy
        .get('@addButton')
        .first()
        .click()
    })
})    