// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Smoke tests', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  context('When page is initially opened', () => {
    it('It should contains start button', () => {
      cy.get('button').contains('Start!')
    })

    it('It should contains hint message to customer', () => {
      cy.get('p').contains('Thumbs Up/Skip 10 movies, we will recommend 20 movies that you may like.')
    })

    it('It should contains website logo', () => {
      cy.get('div').contains('Thumbs Up/Skip 10 movies, we will recommend 20 movies that you may like.')
    })
  })

  context('Start Thumbs/Skip 10 movies', () => {
    it('It should has a movie shown after clicking button start', () => {
      cy.get('button').click()
      cy.get('div').find('img')
    })

    it('It should has two buttons', () => {
      cy.get('button').click()
      cy.get('button').should('have.length', 2)
    })
  })
})
