const { addXPath } = require('cypress-xpath')

 describe('Tempo Cypress BzSearch', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

/*
    it('verify title-positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    }) */
/*
    it('verify title-Nagive test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM123')
    })*/

    //test 1
    it('verify title-positive', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")
        cy.title().should('include','Big Zeta Search Portal')
    }) 
    //Test 2
    it('Login is Working', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
    })

    //Test 3
    it('Login is Working', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');
    })

    //Test 4
    it('Verify Navlinks', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()

        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');

        //const expectedWords = ['Dashboard', 'Administration', 'Features', 'Documentation']
        //cy.contains(expectedWords).should('be.visible');
        cy.get(':nth-child(1) > .mn-nav_item').should('have.text', 'Dashboard');
        cy.get(':nth-child(2) > .mn-nav_item').should('have.text', 'Administration');
        cy.get(':nth-child(3) > .mn-nav_item').should('have.text', 'Features');
        cy.get(':nth-child(4) > .mn-nav_item').should('have.text', 'Documentation');
        
    })

    //Test 4
    it('Verify Header Title are Visible', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');
    })

    //Test 5 
    it('Verify Filter Engine Types are Working', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');

        cy.get('#__BVID__23 > :nth-child(2)').click();
        //Add 
        cy.get('#__BVID__23 > :nth-child(3)').click();
        //Add
        cy.get('#__BVID__23 > :nth-child(1)').click();
    })
 
    //Test 6
    it('Verify Sort Engine Filter are Working', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');
        cy.get('#__BVID__28').select('Creation Date');
        cy.get('#__BVID__28').select('Alphabetical');
        cy.get('#__BVID__28').select('Creation Date');
    })

    //Test 7
    it('Verify Ascending and Descending are Working', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');
        
       
        cy.get('#__BVID__30 > :nth-child(2)').click();
        cy.get('#__BVID__30 > :nth-child(1)').click();
    })

    //Test 7
    it('Verify account filter is working', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');
        
       
        cy.get('#__BVID__34').select('ChicoQATest');
        
    })


    //Test 8
    /*
    it('Verify logout button is working', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');
        
        cy.get('#nav-user').click();
        cy.xpath('//*[@id="nav-user"]/ul/li[9]/button').click();
        
        
    })
    */
    
    //Test 10
    /*
    it('Verify nav name and nave menu name is the same', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');
        
       
        cy.get('#__BVID__34').select('ChicoQATest');
        
    })
    */

    //Test 11
    it('Verify big zeta logo redirects to dashboard', () => {
        cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")

        cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
        cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
        
        cy.xpath('//button[text()="LOGIN"]').click()
        
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');
        
        cy.get(':nth-child(2) > .mn-nav_item').click();
        cy.get('.mn-nav_logoImg').click();
        cy.contains('Your Search Engines', {timeout: 10000}).should('be.visible');
        
    })

    //Test 12
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