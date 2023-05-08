describe('template spec', () => {
  
  
  beforeEach(() => {
    cy.visit('https://gordic.cz/kontakt')
    cy.clearCookies()
    cy.get('.cc-nb-okagree').click() 
  })

  it('write', () => {
    cy
    .get('#frm-name')
    .type('Test Test')
    
    cy
    .get('#frm-email')
    .type('Testing@testing.com')
    
    cy
    .get('#frm-telephone')
    .type('123 456 789')
    
    cy
    .get('#frm-message')
    .type('Cypress E2E Testing -> testing message')

    cy
    .get('#_g_kontakt_INSTANCE_VpHPrB6pxXur_btn_odeslat').click()
  })
})