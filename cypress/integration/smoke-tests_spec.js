// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Smoke tests', () => {
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

  context('Start Thumbs/Skip 10 movies', () => {
    it('It should has a movie shown after clicking button start', () => {
      cy.get('button').contains('Start!').click()
      cy.get('div').find('img')
    })

    it('It should has two buttons', () => {
      cy.get('button').contains('Start!').click()
      cy.get('button').should('have.length', 2)
    })

    it('It should has Skip and Like buttons', () => {
      cy.get('button').contains('Start!').click()
      cy.get('button').contains('Skip')
      cy.get('button').contains('Like')
    })

    it('It should show another img after clicking skip button', () => {
      cy.get('button').contains('Start!').click()
      cy.get('button').contains('Skip').click()
      cy.get('div').find('img')
    })

    it('It should show another img after clicking like button', () => {
      cy.get('button').contains('Start!').click()
      cy.wait(1000)
      cy.get('button').contains('Like').click()
      cy.get('div').find('img')
    })

    it('It should navigate to recommend movie page after clicking Like buttons 10 times', () => {
      cy.get('button').contains('Start!').click()

      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('Like').click()
      }
      cy.get('h1').contains('You Probably Like these Movies:')
    })

    it('It should navigate to recommend movie page after clicking Skip buttons 10 times', () => {
      cy.get('button').contains('Start!').click()
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('Skip').click()
      }
      cy.get('h1').contains('You Probably Like these Movies:')

    })

    it('It should navigate to recommend movie page after clicking Skip and Like buttons 10 times in total', () => {
      cy.get('button').contains('Start!').click()
      for (let i = 0; i < 5; i++) {
        cy.get('button').contains('Skip').click()
      }
      for (let i = 0; i < 5; i++) {
        cy.get('button').contains('Like').click()
      }
      cy.get('h1').contains('You Probably Like these Movies:')
    })
  })

  context('It works well on recommend movie page', () => {
    it('It should contains 20 recommended movies', () => {
      cy.get('button').contains('Start!').click()
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('Like').click()
      }
      cy.get('label').should('have.length', 20)
    })

    it('it should contain 1 button', () => {
      cy.get('button').contains('Start!').click()
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('Like').click()
      }
      cy.get('button').should('have.length', 1)
    })

    it('it should contains Back to Home button', () => {
      cy.get('button').contains('Start!').click()
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('Like').click()
      }
      cy.get('button').contains('Back to Home!')
    })

    it('it should return back to home page after clicking button Back to Home', () => {
      cy.get('button').contains('Start!').click()
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('Like').click()
      }
      cy.get('button').click()
      cy.get('button').contains('Start!')
    })
  })
})
