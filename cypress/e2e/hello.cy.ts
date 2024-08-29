describe('My First Test', () => {
  it('Test hello world', () => {
    cy.visit('/')
    const input = cy.get('#my-input');
    input.type('hello Matheus');
    input.should('have.value', 'hello Matheus');
  })
})
