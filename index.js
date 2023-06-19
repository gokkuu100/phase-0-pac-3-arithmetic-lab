function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a/b;
}
function increment(n) {
    return ++n;
}
function decrement(n) {
    return --n;
}
function makeInt(string) {
    return parseInt(string,10);
}

function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(makeInt("8.66"));
console.log(preserveDecimal("6.333"));
