// test_spec.js
describe('Alphabetical Article Sorter', () => {
  beforeEach(() => {
    cy.visit('/main.html'); // Adjust path as needed
  });

  it('presence of the list - contains an unordered list with id bands', () => {
    cy.get('#bands').should('be.visible');
  });

  it('should display articles in correct sorted order', () => {
    cy.get('#bands li').should('have.length', 13);
    
    const expectedOrder = [
      'Anywhere But Here',
      'The Bled',
      'Counterparts',
      'The Devil Wears Prada',
      'The Midway State',
      'Norma Jean',
      'Oh, Sleeper',
      'An Old Dog',
      'Pierce the Veil',
      'The Plot in You',
      'Say Anything',
      'A Skylit Drive',
      'We Came as Romans'
    ];

    expectedOrder.forEach((article, index) => {
      cy.get('#bands li').eq(index).should('contain', article);
    });
  });
});