const { addXPath } = require('cypress-xpath')

 describe('Keyword Engine Creation', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
            cy.visit("https://portal-stage.bigzeta.com/login?redirect=%2F")
    
            cy.xpath('//input[@placeholder="Email"]').click().type('jgaid@innovuze.com')
            cy.xpath('//input[@placeholder="Password"]').click().type('Jmsryn0258+')
            
            cy.xpath('//button[text()="LOGIN"]').click()
            cy.xpath('//*[@id="app"]/div[2]/div/div/div[1]/div[2]/div[2]/div[2]/button', {timeout: 10000}).click();
            cy.get('#accountInput').select('ChicoQATest')
            cy.get('#name-input').type('AutomatedTest')
            cy.xpath('//*[@id="app"]/div[2]/div/div[2]/div[3]/div[2]/span/button').click();
            
    })

    it('Create Keyword Engine', () => {

        cy.xpath('/html/body/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div/form/div[1]/div[1]/div/div[1]/input').type('www.Marketpush.com')
        
        cy.xpath('//*[@id="__BVID__879"]/div/div[1]/button').click()
        //Clicks next
        cy.xpath('//*[@id="app"]/div[2]/div/div[2]/div[3]/div[2]/span/button').click();
    })
})