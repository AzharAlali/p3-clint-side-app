QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST adding', assert => {
  assert.equal(adding(1, 1), 2, 'Positive integers')
  assert.equal(adding(-1, -1), -2, 'Negative integers')
  assert.equal(adding(-10, 10), 0, 'Mixed')
})

