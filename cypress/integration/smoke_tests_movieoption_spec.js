// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Smoke tests movie options', () => {

  const btnLike = 'Like'
  const btnSkip = 'Skip'
  const btnStart = 'Start'

  beforeEach(function () {
    cy.visit('/')
    cy.get('button').contains(btnStart).click()
  })

  function clickButtonTimes (btn, n) {
    for (let i = 0; i < n; i++) {
      cy.get('button').contains(btn).click()
      cy.wait(1000);
    }
  }

  context('Start Thumbs/Skip 10 movies', () => {
    it('It should has a movie shown after clicking button start', () => {
      cy.get('div').find('img')
    })

    it('It should has two buttons', () => {
      cy.get('button').should('have.length', 2)
    })

    it('It should has Skip and Like buttons', () => {
      cy.get('button').contains(btnSkip)
      cy.get('button').contains(btnLike)
    })

    it('It should show another img after clicking skip button', () => {
      cy.get('button').contains(btnSkip).click()
      cy.get('div').find('img')
    })

    it('It should show another img after clicking like button', () => {
      cy.get('button').contains(btnLike).click()
      cy.get('div').find('img')
    })

    it('It should navigate to recommend movie page after clicking Like buttons 10 times', () => {
      clickButtonTimes(btnLike, 10)
      cy.get('h2').contains('You Probably Like these Movies:')
    })

    it('It should navigate to recommend movie page after clicking Skip buttons 10 times', () => {
      clickButtonTimes(btnSkip, 10)
      cy.get('h2').contains('You Probably Like these Movies:')

    })

    it('It should navigate to recommend movie page after clicking Skip and Like buttons 10 times in total', () => {
      clickButtonTimes(btnSkip, 5)
      clickButtonTimes(btnLike, 5)
      cy.get('h2').contains('You Probably Like these Movies:')
    })
  })
})
