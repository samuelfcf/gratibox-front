describe('SignIn Flow', () => {
  it('returns 200 for sign in successfully', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Já sou grato').click();

    cy.get('input[placeholder=Email]').type('emailteste@email.com');
    cy.get('input[placeholder=Senha]').type('senhaaleatoria');
    cy.get('button[type=submit]').click();

    cy.url().should('equal', 'http://localhost:3000/plans');
  });
});
