function numberChecker(numbersArray) {
    return function(number) {
        return numbersArray.includes(number);
    };
}

// Example usage
const checkNumbers = numberChecker([1, 2, 3, 4, 5]);

console.log(checkNumbers(3));  // Output: true
console.log(checkNumbers(7));  // Output: false
