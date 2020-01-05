// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Smoke tests recommendation movie', () => {
  const btnStart = 'Start!'
  const btnLike = 'Like'
  const btnBackToHome = 'Back to Home!'

  beforeEach(function () {
    cy.visit('/')
    cy.get('button').contains(btnStart).click()
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains(btnLike).click()
    }
  })

  context('It works well on recommend movie page', () => {
    it('It should contains 20 recommended movies', () => {
      cy.get('label').should('have.length', 20)
    })

    it('it should contain 1 button', () => {
      cy.get('button').should('have.length', 1)
    })

    it('it should contains Back to Home button', () => {
      cy.get('button').contains(btnBackToHome)
    })

    it('it should return back to home page after clicking button Back to Home', () => {
      cy.get('button').click()
      cy.get('button').contains(btnStart)
    })
  })
})
