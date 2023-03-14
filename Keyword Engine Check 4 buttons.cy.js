const { addXPath } = require('cypress-xpath')

 describe('Keyword Engine', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    xit('Verify if preview button is working WIP', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible')
        cy.get('#__BVID__23 > :nth-child(3)').click();
        cy.get('#__BVID__34').select('ChicoQATest');
        cy.get(':nth-child(1) > .l-card > .e-card_footer > .l-button_group > :nth-child(1)').click()
    })
    
    xit('Verify if Install button is working ', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible')
        cy.get('#__BVID__23 > :nth-child(3)').click();
        cy.get('#__BVID__34').select('ChicoQATest');
        cy.get(':nth-child(1) > .l-card > .e-card_footer > .l-button_group > :nth-child(2)').click()
        
        //Verifies if you are on Install page
        cy.contains('Installation Instructions', {timeout: 10000}).should('be.visible')
    })

    xit('Verify if Analytics button is working WIP', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible')
        cy.get('#__BVID__23 > :nth-child(3)').click();
        cy.get('#__BVID__34').select('ChicoQATest');
        cy.get(':nth-child(1) > .l-card > .e-card_footer > .l-button_group > :nth-child(3)').click()
        
        //Verifies if you are on Install page
        cy.get('.se-header_title').should('contain','Analytics For AutomationTest', {timeout: 10000})
        
    })

    xit('Verify if Status button is working WIP', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible')
        cy.get('#__BVID__23 > :nth-child(3)').click();
        cy.get('#__BVID__34').select('ChicoQATest');
        cy.get(':nth-child(1) > .l-card > .e-card_footer > .l-button_group > :nth-child(4)').click()

        cy.contains('AutomationTest Crawl Report', {timeout: 10000}).should('be.visible')
          
        cy.get('.form-control').type('about')
        cy.contains('https://www.marketpush.com/about-us', {timeout: 10000}).should('be.visible')
    })

    it('Verify if Delete button is working WIP', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible')
        cy.get('#__BVID__23 > :nth-child(3)').click();
        cy.get('#__BVID__34').select('ChicoQATest');

        cy.get('.bz-menu_trigger', {timeout: 10000}).click()

        cy.get('#__BVID__852 > .dropdown-menu > .bz-menu_delete > .dropdown-item').click()
        
        
        
        cy.get('.form-control').type('AutomationTest') 
       
    })
    
 })