describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://letcode.in/buttons')
  })

  it('home-button', () => {
    cy
    .get('#home')
    .click()
    .go('back')
  })

  it('color', () => {
    cy
    .get('.button.is-primary')
    .should('have.css', 'background-color', 'rgb(138, 77, 118)')
  })

  it('property', () => {
    cy
    .get('.button')
    .should('have.css','height', '30px')
  })

  it('disabled', () => {
    cy
    .get('#isDisabled')
    .should('be.disabled')
  })

  it('hold', () => {
    cy
    .get('#isDisabled.button.is-primary')
    .trigger('mousedown', {button: 0})
  })
})