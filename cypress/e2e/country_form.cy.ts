describe('Country Form Component Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should have 4 selectors, one is enabled and the rest are disabled', () => {
    cy.get('select').should('have.length', 4)

    cy.get('select').first().should('not.be.disabled');
    cy.get('select').eq(1).should('be.disabled');
    cy.get('select').eq(2).should('be.disabled');
    cy.get('select').eq(3).should('be.disabled');
  })

  it('should allow the user to select Russia as the country in the 1st selector and have 4 options available in the last selector', () => {
    cy.get('select').first().select('Российская Федерация');
    cy.get('select').eq(1).select('Москва');
    cy.get('select').eq(2).select('Технический');
    cy.get('select').eq(3).find('option').should('have.length', 5)
  })

  it('should allow the user to select Belarus as the country in the 1st selector and have 2 options available in the last selector', () => {
    cy.get('select').first().select('Республика Беларусь');
    cy.get('select').eq(1).select('Гомель');
    cy.get('select').eq(2).select('Технический');
    cy.get('select').eq(3).find('option').should('have.length', 3)
  })

  it('should allow the user to select a country, a city, a university and some accommodation, submitting the information and displaying an alert message with the data', () => {
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('select').first().select('Республика Беларусь');
    cy.get('select')
      .eq(1)
      .should('not.be.disabled')
      .select('Гомель')
      .should('have.value', 'Гомель');
    cy.get('select').eq(2).should('not.be.disabled').select('Технический');
    cy.get('select')
      .eq(3)
      .should('not.be.disabled')
      .select('Общежития')
      .should('have.value', 'Общежития');
    cy.get('button[type="submit"]')
      .click()
      .then(() => {
        cy.on('window:alert', (message) => {
          expect(message).to.equal(
            'Страна: Республика Беларусь, город: Гомель, университет: Технический, проживание: Общежития'
          );
        });
      });
  });

});
