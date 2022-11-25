describe('alura login', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('busca curso', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome').should('contain','Formação Java e Orientação a Objetos');
    })
})