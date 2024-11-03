describe('Carrinho', () => {
    it('Adicionar produto ao carrinho com sucesso', () => {
      //arrange
      cy.visit('https://www.saucedemo.com/v1/')
      
      cy.get('[data-test="username"]').type('standard_user')
  
      cy.get('[data-test="password"]').type('secret_sauce')
  
      cy.get('#login-button').click()
       //act
       cy.get(':nth-child(1) > .pricebar > .btn_primary').click()      
       
       //assert
      cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1')

      cy.get('#shopping_cart_container').click()

      cy.contains('Sauce Labs Backpack')
      .should('be.visible')
  
    })
  })