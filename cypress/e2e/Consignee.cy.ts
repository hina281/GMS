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

    it('Add Consignee',()=>{
    })
})    