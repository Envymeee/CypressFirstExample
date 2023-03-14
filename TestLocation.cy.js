const { addXPath } = require('cypress-xpath')

 describe('Tempo Trial', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    it('Verify copyright is visible at the bottom', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible')
        cy.scrollTo('bottom')
        cy.xpath('//*[@id="app"]/div[3]/div').should('contain','© 2019-2020 Big Zeta Corp.')
    })
    

    
 })