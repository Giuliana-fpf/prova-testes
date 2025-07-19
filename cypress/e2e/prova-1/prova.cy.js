describe('Prova', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('Testes de Sanidade na Página de Login-passou', () => {
        cy.login('standard_user', 'secret_sauce')
    })
    it('Testes de Sanidade na Página de Login-username-errado', () => {
        cy.login('andre-luan', 'secret_sauce')
    })
    it('Testes de Sanidade na Página de Login-senha-errada', () => {
        cy.login('performance_glitch_user', 'andre-luan')
    })

    it('Automação de uma Funcionalidade Pós-Login - comprando 5 itens', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Luan')
        cy.get('#last-name').type('Luan²')
        cy.get('#postal-code').type('69000-000')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('h2').contains('Thank you for your order!').should('be.visible')
        cy.get('#back-to-products').click()

    })
})