describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('localhost:4200')
      cy.contains("Bienvenido a la página web sobre desarollo web")
    })
  })
  