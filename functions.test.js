const{ 
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test('Returns 2', () => {
    expect(returnTwo()).toBe(2)
})

test('Greets', () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})

describe('Math Functions', () => {
    
    test('Adds two numbers', () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
        })

    test('Multiplies two numbers', () => {
        expect(multiply(1, 2)).toEqual(2)
        })

    test('Divides two numbers', () => {
        expect(divide(6, 2)).toEqual(3)
        })

    test('Subtracts two numbers', () => {
        expect(subtract(5, 2)).toEqual(3)
        })

})