describe('Teste acesso mitra', () => {

    beforeEach(() => {
        cy.visit('https://api0.mitraecp.com:8685/');
    })
   
    it('Logar!', () => {
        cy.get('#input-19').type('1');
        cy.get('#input-20').type('1');
        cy.get('.v-btn').click();
        cy.get('#input-55').type('Mikio');
        cy.get('.m-action > .v-btn').click({delay : 10000});
    })



})