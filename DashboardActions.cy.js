const { addXPath } = require('cypress-xpath')

describe('DashboardActions', () => {
    class LoginAction{
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible')
    }
} 