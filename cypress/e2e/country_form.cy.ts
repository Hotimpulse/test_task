describe('Country Form Component Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should allow the user to select a country, a city, a university and some accommodation', () => {

    cy.get('button[type="submit"]').should('be.disabled')
    cy.get('select').first().select('Республика Беларусь');
    cy.get('select').eq(1).should('not.be.disabled').select('Гомель').should('have.value', 'Гомель');
    cy.get('select').eq(2).should('not.be.disabled').select('Технический');
    cy.get('select').eq(3).should('not.be.disabled').select('Общежития').should('have.value','Общежития')
    cy.get('button[type="submit"]').click().then(() => {
      cy.on('window:alert', (message) => {
        expect(message).to.equal('Страна: Республика Беларусь, город: Гомель, университет: Технический, проживание: Общежития');
      })
    })
      
  })
})
