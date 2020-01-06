// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Smoke tests movie options', () => {
  beforeEach(function () {
    cy.visit('/')
    cy.get('button').contains('Start!').click()
  })

  context('Start Thumbs/Skip 10 movies', () => {
    it('It should has a movie shown after clicking button start', () => {
      cy.get('div').find('img')
    })

    it('It should has two buttons', () => {
      cy.get('button').should('have.length', 2)
    })

    it('It should has Skip and Like buttons', () => {
      cy.get('button').contains('Skip')
      cy.get('button').contains('Like')
    })

    it('It should show another img after clicking skip button', () => {
      cy.get('button').contains('Skip').click()
      cy.get('div').find('img')
    })

    it('It should show another img after clicking like button', () => {
      cy.get('button').contains('Like').click()
      cy.get('div').find('img')
    })

    it('It should navigate to recommend movie page after clicking Like buttons 10 times', () => {
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('Like').click()
      }
      cy.get('h1').contains('You Probably Like these Movies:')
    })

    it('It should navigate to recommend movie page after clicking Skip buttons 10 times', () => {
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('Skip').click()
      }
      cy.get('h1').contains('You Probably Like these Movies:')

    })

    it('It should navigate to recommend movie page after clicking Skip and Like buttons 10 times in total', () => {
      for (let i = 0; i < 5; i++) {
        cy.get('button').contains('Skip').click()
      }
      for (let i = 0; i < 5; i++) {
        cy.get('button').contains('Like').click()
      }
      cy.get('h1').contains('You Probably Like these Movies:')
    })
  })
})
