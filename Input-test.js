describe('Input test', () => {
  beforeEach(() => {
    cy.visit('https://letcode.in/edit')
  })
  
  it('verify-title', () => {
    cy.title().should('eq','Interact with Input fields')
  })

  it('full-name', () => {
    cy.get('#fullName').type('KukyN tester') //id
    cy.get('#join').type(' další text').tab()
    cy
    .get('#getMe')
    .invoke('attr','value')
    .should('eq','ortonikc')
  })

  it('join', () => {
    cy.get('#join').type(' další text').tab()
  })

  it('getMe', () => {
    cy
    .get('#getMe')
    .invoke('attr','value')
    .should('eq','ortonikc')
  })

  it('clear-text', () => {
    cy
    .get('#clearMe').clear()
  })

  it('disabled', () => {
    cy
    .get('#noEdit')
    .should('be.disabled')
  })

  it('readonly', () => {
    cy
    .get('#dontwrite')
    .should('have.attr', 'readonly')
  })
})