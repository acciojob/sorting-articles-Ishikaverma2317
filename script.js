// // test_articles.js
// describe('Alphabetical Article Sorter', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:8000') // Your webpage URL
//   })

//   it('should display articles sorted alphabetically ignoring a, an, the', () => {
//     // Check if all expected articles are present in correct order
//     cy.get('#band li').should('have.length', 13)
    
//     // Verify the exact order ignoring a, an, the
//     const expectedOrder = [
//       'Anywhere But Here',
//       'The Bled', 
//       'Counterparts',
//       'The Devil Wears Prada',
//       'The Midway State',
//       'Norma Jean',
//       'Oh, Sleeper',
//       'An Old Dog',
//       'Pierce the Veil',
//       'The Plot in You',
//       'Say Anything',
//       'A Skylit Drive',
//       'We Came as Romans'
//     ]

//     expectedOrder.forEach((article, index) => {
//       cy.get('#band li').eq(index).should('contain', article)
//     })
//   })

//   it('should contain specific articles', () => {
//     cy.get('#band li:contains("Anywhere But Here")').should('exist')
//     cy.get('#band li:contains("The Bled")').should('exist')
//     cy.get('#band li:contains("Counterparts")').should('exist')
//     cy.get('#band li:contains("The Devil Wears Prada")').should('exist')
//     cy.get('#band li:contains("The Midway State")').should('exist')
//     cy.get('#band li:contains("Norma Jean")').should('exist')
//     cy.get('#band li:contains("Oh, Sleeper")').should('exist')
//     cy.get('#band li:contains("An Old Dog")').should('exist')
//   })
// })