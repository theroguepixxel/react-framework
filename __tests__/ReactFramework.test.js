'use strict'

const ReactFramework = require('../index').default
const expect = require('chai').expect
const React = require('react')

describe("ReactFramework", () => {

  describe("initialiseRegistry", () => {

    it('should be a function', () => {
      expect(ReactFramework.initialiseRegistry).to.be.a('function')
    })

  })

  describe("createApp", () => {

    it('should be a function', () => {
      expect(ReactFramework.createApp).to.be.a('function')
    })
    
    it('should throw an error before calling "ReactFramework.initialiseRegistry"', () => {
      expect(() => ReactFramework.createApp())
      .to.throw()
    })

    
    it('should not throw after calling "ReactFramework.initialiseRegistry"', () => {
      ReactFramework.initialiseRegistry({})
      expect(() => ReactFramework.createApp()).to.not.throw()
    })
  })



})