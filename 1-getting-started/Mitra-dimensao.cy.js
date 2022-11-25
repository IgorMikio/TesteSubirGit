describe('Mitra loga', ()=>{

    before(() => {
        cy.visit('https://api0.mitraecp.com:8685/');
        cy.login('teste 3','mitra123');
        cy.get('.v-btn__content > .theme--dark').click();
        cy.get('.v-list-item:nth-child(1) > .v-list-item__title').click();
    })

    it('Cria dimensão', ()=> {

        cy.get('.v-btn--contained .v-icon').click();
        cy.get('.v-dialog .v-text-field:not(.v-select) input').type('mikio123');
        cy.get('.ml-2 > .v-btn__content').click();
        cy.get('.dimension-item').should('contain','mikio123');

    })

    it('Adiciona membro', ()=> {

        cy.get('#input-1780').type('mikio123');
        cy.get(':nth-child(1) > .dimension-item').click();
        cy.get('.row > :nth-child(1) > .v-btn > .v-btn__content > .v-icon').click();
        cy.get('.v-dialog .elevation-0').type('1');
        cy.get('.v-dialog .v-text-field:not(.elevation-0)').type('teste');
        cy.get('.ml-2 > .v-btn__content').click();
        cy.get('.v-small-dialog__activator').should('contain','teste');

    })

    it('Apagar dimensão', ()=> {
  
        cy.get('[style="color: rgb(183, 33, 255); caret-color: rgb(183, 33, 255);"] > .v-btn__content').click();
        cy.get('.v-dialog .v-text-field').type('mikio123');
        cy.get('.v-card__actions').click();
        cy.get('.dimension-item').should('not.contain','mikio123');

    })
})