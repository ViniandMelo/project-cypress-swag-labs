describe('Login', () => {
  it('Realizar login com sucesso', () => {
    //arrange
    cy.visit('https://www.saucedemo.com/v1/')
    //act
    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('#login-button').click()

    //assert
    cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')

  })
  it('Realizar login inválido', () => {

    //arrange
    cy.visit('https://www.saucedemo.com/v1/')

    //act
    cy.get('[data-test="username"]').type('standarduser')

    cy.get('[data-test="password"]').type('secretsauce')

    cy.get('#login-button').click()

    //assert
    cy.get('[data-test="error"]')
    .should('contain.text','Username and password do not match any user in this service')
    cy.url().should('eq','https://www.saucedemo.com/v1/')

  })
})