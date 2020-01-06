// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Smoke tests home page', () => {
  beforeEach(function () {
    cy.visit('/')
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
})
