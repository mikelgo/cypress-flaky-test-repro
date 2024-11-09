import { getGreeting } from '../support/app.po';

describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('flaky', () => {
    cy.get('button').click();
    cy.get('p').should('contain', 'Saving...');
    cy.get('p').should('contain', 'Saved');
  });
});
