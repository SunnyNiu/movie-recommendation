// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Smoke tests home page', () => {
  const btnStart = 'Start'

  beforeEach(function () {
    cy.visit('/')
  })

  context('When page is initially opened', () => {
    it('It should contains start button', () => {
      cy.get('button').contains(btnStart)
    })

    it('It should contains hint message to customer', () => {
      cy.get('p').contains('Thumbs Up/Skip 10 movies, we will recommend movies that you probably like according to your options')
    })
  })
})
