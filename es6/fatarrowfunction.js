// function declaration
function add(num1, num2) {
    return (num1 + num2);
}

console.log(add(10,20));
console.log(add("Hello", " World"));

// function expresssion
let sub = function (num1, num2) {
    return (num1 - num2);
}

console.log(sub(10,20));

// Fat Arrow Function
let mul = (num1, num2) => {
    return (num1 * num2);
};

console.log(mul(10,20));
