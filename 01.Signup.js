/// <reference types="cypress" />
describe('Login test', function() {
    
    it('As an Owner I should be able to signup with valid credentials ', ()=> {
       cy.signupURL()
       cy.get('[name=firstName]').type('Shalini')
       cy.get('[name=lastName]').type('Pandey')
       cy.get('[name=email]').type('a2@yopmail.com')
       cy.get('[name=org]').type('Crownstack')
       cy.get('[name=password]').type('12345678')
       cy.get('[name=cnfpassword]').type('12345678')
       cy.get('[name=address1]').type('NARAYANPURAM COLONY')
       cy.get('[name=address2]').type('1234abc')
       cy.get('[name=city]').type('hrhtx')
       cy.get('[name=state]').type('Uttarakhand')
       cy.get('[name=postalCode]').type('262402')
       cy.get('[name=country]').select('India')
       cy.get('[name=termAndCondition]').check()
       cy.get('[id=sign-up]').click()
       cy.log('.....USER SIGNED UP SUCCESSFULLY......')
    })

    it('To verify the blank field validation of signup page', ()=> {
        cy.signupURL()
        cy.get('[id=sign-up]').click()
        cy.log('.....USER Should get vlidation error message......')
    })

    it('As an Owner I should not be able to signup with invalid credentials ', ()=> {
        cy.signupURL()
        cy.get('[name=firstName]').type('Shalini123')
        cy.get('[name=lastName]').type('Pandey123')
        cy.get('[name=email]').type('abraham11@yopmail')
        cy.get('[name=org]').type('Crownstack')
        cy.get('[name=password]').type('12345678')
        cy.get('[name=cnfpassword]').type('123456789')
        cy.get('[name=termAndCondition]').check()
        cy.get('[name=address1]').type('NARAYANPURAM COLONY')
       cy.get('[name=address2]').type('1234abc')
       cy.get('[name=city]').type('lalkuan')
       cy.get('[name=state]').type('Uttarakhand')
       cy.get('[name=postalCode]').type('262402')
       cy.get('[name=country]').select('India')
        cy.get('[id=sign-up]').click()
        cy.log('.....USER Should get vlidation error message and should not be able to login......')
    })

    it('Owner should not be able to sign up with already taken email id', ()=> {
        cy.signupURL()
       cy.get('[name=firstName]').type('Shalini')
       cy.get('[name=lastName]').type('Pandey')
       cy.get('[name=email]').type('shalini03@yopmail.com')
       cy.get('[name=org]').type('Crownstack')
       cy.get('[name=password]').type('12345678')
       cy.get('[name=cnfpassword]').type('12345678')
       cy.get('[name=address1]').type('NARAYANPURAM COLONY')
       cy.get('[name=address2]').type('1234abc')
       cy.get('[name=city]').type('lalkuan')
       cy.get('[name=state]').type('Uttarakhand')
       cy.get('[name=postalCode]').type('262402')
       cy.get('[name=country]').select('India')
       cy.get('[name=termAndCondition]').check()
       cy.get('[id=sign-up]').click()
       cy.contains('User with this email id already exists')
       cy.log('.....USER should get a validation error......')
    })
    it('verify to navigate to login page from sign up page ', ()=> {
        cy.signupURL()
        cy.get('a:contains(Login)').click()
        //cy.url().should('include','signup')
        cy.log('........User is naviagted to Login page.......')
    })

})