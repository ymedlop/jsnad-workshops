'use strict'
const { test } = require('tap');
const uppercase = require('./uppercase')

test('transform "text" to Uppercase successfuly', async ({ equal }) => {
    equal(uppercase("text"), "TEXT")
})

test('throw when inputs are not string', async ({ throws }) => {
    throws(() => uppercase({}), Error('input must be a string'))
})
