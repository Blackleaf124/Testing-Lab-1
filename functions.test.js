const{ 
    returnTwo,
    greeting,
    add
} = require('./functions.js')

test('returns 2', () => {
    expect(returnTwo()).toBe(2)
})

test('Greets', () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})

test('adds two numbers', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})