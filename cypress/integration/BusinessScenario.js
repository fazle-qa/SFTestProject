describe('Business Scenario', () => {

    it('Verify API returns 200 status and all the Data', () => {
      cy.intercept('GET', 'https://sellerfusion-qa-test.vercel.app/api/products').as('products')
      cy.visit('/')
      cy.wait('@products')
      cy.get('@products').then((xhr) => {
        expect(xhr.response.statusCode).to.equal(200)
        expect(xhr.response.statusMessage).to.equal('OK')
      })
    });
  })
