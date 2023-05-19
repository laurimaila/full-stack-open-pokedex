describe('Pokedex', function () {
  it('pokemon page can be navigated to', function () {
    cy.visit('http://localhost:3000')
    cy.contains('raichu').click()
    cy.contains('static')
    cy.contains('raichu')
  })
})