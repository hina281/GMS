import { faker } from '@faker-js/faker'
var cname=faker.company.bsNoun()
var name=faker.person.fullName()
var email=faker.internet.email()
var country=faker.location.country()
var zcode=faker.location.zipCode('##########') 
var number=faker.phone.number()
var address= faker.location.streetAddress()
describe('Agency test Cases',()=>{
        beforeEach(()=>{
            cy.fixture('logindetails.json').then((user)=>{
                cy.login(user.username,user.Password)
            })
        })

    it('Add Individual Customer',()=>{
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
        .get('[href="#/3/master-data/customer"]')
        .click()
        cy
        .contains('Add')
        .click()
        cy
        .get('#customer_customerType')
        .type('Individual{enter}')
        cy
        .get('#customer_name')
        .type(name)
        cy
        .get('#customer_arabicName')
        .type(name)
        cy
        .get('#customer_VAT')
        .type(zcode)
        cy
        .get('#customer_idNumber')
        .type(zcode)
        cy
        .get('#customer_mobile')
        .type(number)
        cy
        .get('#customer_region')
        .type(country)
        cy
        .get('#customer_cityId')
        .click()
        cy
        .wait(1000)
        cy
        .contains('div','Yanbu')
        .as('city')
        cy
        .get('@city')
        .click()
        cy
        .get('#customer_fimsId')
        .type(zcode)
        cy
        .get('.ant-upload #customer_logo').selectFile('logo.jpeg',{force:true})
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