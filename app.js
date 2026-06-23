console.log('lab work')

function isAdult(age) {
    if (age >= 18) {
        return 'adult'
    }
    else {
        return 'minor'
    }
} console.log('exsercise 2 answer', isAdult(21))

function isCharAVowel(letter) {
    if (letter === 'a' || letter === 'o'|| letter === 'e' || letter === 'u'|| letter === 'i') {
        return true
    }
    else {
        return false
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

function generateEmail(firstName, domain) {
    return `${firstName}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("faisal", "gmail.com"));

function greetUser(time, name) {
    return `Good ${time},${name}`

}
console.log('Exercise 5 Result:', greetUser("morning", "faisal"));

function maxOfThree(number1, number2, number3) {

    if (number1 >= number2 && number1 >= number3) {
        return number1
    }
    else if (number2 >= number1 && number2 >= number3) {
        return number2
    }
    else {
        return number3
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

function calculateTip(total, tippercentage) {
    return total * tippercentage / 100

} console.log('Exercise 7 Result:', calculateTip(50, 20));

function convertTemperature(temp, scale) {
    if (scale === 'C') {
        return temp * (9 / 5) + 32
    }
    else {
        return (temp - 32) * 5 / 9
    }

} console.log('Exercise 8 Result:', convertTemperature(32, "C"));

function basicCalculator(num1, num2, operation) {
    if (operation == '+') {
        return num1 + num2;
    }
    else if (operation === '-') {
        return num1 - num2;
    }
    else if (operation === '*') {
        return num1 * num2;
    }

    else if (operation === '/'){
        return num1 / num2;
    }

}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));