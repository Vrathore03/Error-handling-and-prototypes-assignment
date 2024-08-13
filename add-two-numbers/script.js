class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// Call the static add method without instantiating the class
const sum = Calculator.add(5, 7);

console.log(sum);  // Output: 12
