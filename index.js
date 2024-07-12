// receivesAFunction function
function receivesAFunction(callback) {
    // Calling the callback function
    callback();
}

// returnsANamedFunction function
function returnsANamedFunction() {
    // Returning a named function
    return function namedFunction() {
        // Function body (optional)
    };
}

// returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
    // Returning an anonymous function directly
    return function() {
        // Function body (optional)
    };
}

// Example usage (you can modify or expand upon this as needed)
function callbackFunction() {
    console.log("Callback function called!");
}

receivesAFunction(callbackFunction);
let namedFunc = returnsANamedFunction();
let anonymousFunc = returnsAnAnonymousFunction();

console.log(namedFunc); // Logs the named function
console.log(anonymousFunc); // Logs the anonymous function
