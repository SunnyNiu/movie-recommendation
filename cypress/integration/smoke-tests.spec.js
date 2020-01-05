/// <reference types="cypress" />
import { cy } from 'cypress'

describe('Smoke tests', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('Ok, there are no movie', () => {
    cy.get('p').children().should('have.length', 72)
  })
})
